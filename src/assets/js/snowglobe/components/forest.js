import {
  Mesh,
  SphereGeometry,
  ConeGeometry,
  Group,
  CylinderGeometry,
  MeshLambertMaterial,
  MeshStandardMaterial,
  TextureLoader,
  SRGBColorSpace,
  Box3,
  Sphere,
  Vector3,
} from "three";

// Widest part of a tree at scale 1: the canopy cones are ConeGeometry(80, ...),
// and the snow blobs sit within that. Two trees intersect unless the gap
// between their centers covers both their radii.
const TREE_RADIUS = 80;

// Vertical extent of a tree at scale 1, relative to the tree's own origin:
// the trunk hangs to -250, the tallest canopy cone tops out at 325. Both
// scale with the tree, which is why a tree's base height has to be derived
// from its scale rather than being a fixed number.
const TREE_MIN_Y = -250;
const TREE_MAX_Y = 325;

import trunkBase from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_BaseColor.jpg";
import trunkNormal from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_Normal.jpg";
import trunkHeight from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_Height.png";
import trunkRough from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_Roughness.jpg";
import trunkAO from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_AmbientOcclusion.jpg";

class Trunk extends Mesh {
  constructor() {
    const geometry = new CylinderGeometry(5, 20, 500, 50);
    const textureLoader = new TextureLoader();
    const trunkBaseTexture = textureLoader.load(trunkBase);
    trunkBaseTexture.colorSpace = SRGBColorSpace;
    const material = new MeshStandardMaterial({
      map: trunkBaseTexture,
      normalMap: textureLoader.load(trunkNormal),
      displacementMap: textureLoader.load(trunkHeight),
      displacementScale: 10,
      roughnessMap: textureLoader.load(trunkRough),
      roughness: 0.5,
      aoMap: textureLoader.load(trunkAO),
    });
    super(geometry, material);
  }
}

class Leaf extends Mesh {
  constructor(level) {
    let geometry;
    if (level === 1) geometry = new ConeGeometry(80, 350, 100);
    else if (level === 2) geometry = new ConeGeometry(80, 300, 100);
    else geometry = new ConeGeometry(80, 250, 100);

    const material = new MeshLambertMaterial({ color: 0x2f4f4f });
    super(geometry, material);
  }
}

class Snow extends Mesh {
  constructor() {
    // Cheap low-poly blob — this shape is repeated 3x per tree across 30 trees.
    const geometry = new SphereGeometry(20, 8, 8);
    const material = new MeshLambertMaterial({ color: 0xf0f8ff });
    super(geometry, material);
  }
}

class Trees extends Group {
  constructor({
    count = 30,
    radius = 1000,
    noTreeField = 0.25,
    // Per-tree size range. Smaller trees need less room, so a wider range
    // also lets more of them fit.
    minScale = 0.8,
    maxScale = 1.2,
    // Extra breathing room around obstacles, on top of each tree's own
    // canopy radius. 0 means a canopy may sit right up against the house.
    clearance = 0,
    // World height of the surface trees stand on (the ground disc sits at 0).
    groundY = 0,
    // The ground has +/-0.1 of simplex noise, so sink trunks by that much to
    // guarantee they never hover over a bump.
    embed = 0.1,
  } = {}) {
    super();
    this.treeNum = count;
    this.radius = radius;
    this.noTreeField = noTreeField;
    this.minScale = minScale;
    this.maxScale = maxScale;
    this.clearance = clearance;
    this.groundY = groundY;
    this.embed = embed;
    this.treePositions = [];
  }

  /**
   * Converts a world-space object into a keep-out box in this group's local
   * space, so trees can be placed clear of it. Only the horizontal (x/z)
   * footprint matters — every tree sits at the same height.
   *
   * The object's bounding-box corners are mapped individually into local
   * space. Going via a world-space circle instead would stack three layers
   * of over-estimation (rotated AABB, then its half-diagonal, then dividing
   * by the smallest axis scale) and block far more ground than the object
   * actually covers.
   */
  toLocalExclusion(object) {
    object.updateMatrixWorld(true);

    const box = new Box3().setFromObject(object);
    if (box.isEmpty()) return null;

    const corner = new Vector3();
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;

    for (const x of [box.min.x, box.max.x]) {
      for (const y of [box.min.y, box.max.y]) {
        for (const z of [box.min.z, box.max.z]) {
          this.worldToLocal(corner.set(x, y, z));
          minX = Math.min(minX, corner.x);
          maxX = Math.max(maxX, corner.x);
          minZ = Math.min(minZ, corner.z);
          maxZ = Math.max(maxZ, corner.z);
        }
      }
    }

    return { minX, maxX, minZ, maxZ };
  }

  /**
   * True when a whole tree at this local (x, z) stays inside `bounds`
   * (a world-space sphere). The tree's local bounding box is convex, so
   * testing its eight transformed corners is enough to prove containment.
   */
  fitsInside(x, baseY, z, scale, bounds) {
    const corner = new Vector3();
    const r = TREE_RADIUS * scale;
    for (const dx of [-r, r]) {
      for (const dy of [TREE_MIN_Y * scale, TREE_MAX_Y * scale]) {
        for (const dz of [-r, r]) {
          corner.set(x + dx, baseY + dy, z + dz);
          this.localToWorld(corner);
          if (corner.distanceTo(bounds.center) > bounds.radius) return false;
        }
      }
    }
    return true;
  }

  /**
   * Scatters the trees. `obstacles` are world-space objects trees must not
   * grow through (the house, the snowman); `container` is a world-space
   * object every tree must fit entirely inside (the glass globe) — any tree
   * that would poke out of it is discarded rather than placed.
   *
   * Call this AFTER setting this group's own transform, since obstacles and
   * the container are converted relative to it.
   */
  populate({ obstacles = [], container = null } = {}) {
    this.updateMatrixWorld(true);

    const exclusions = obstacles
      .map((object) => this.toLocalExclusion(object))
      .filter(Boolean);

    let bounds = null;
    if (container) {
      container.updateMatrixWorld(true);
      if (container.geometry) {
        // Use the geometry's own bounding sphere. Going via Box3 would
        // circumscribe the bounding *box* instead, inflating a radius-r
        // sphere to r*sqrt(3).
        container.geometry.computeBoundingSphere();
        bounds = container.geometry.boundingSphere
          .clone()
          .applyMatrix4(container.matrixWorld);
      } else {
        bounds = new Box3().setFromObject(container).getBoundingSphere(new Sphere());
      }
    }

    const positions = [];

    // Height of the ground in this group's local space. The group only spins
    // about Y, so local Y maps to world Y independently of x/z.
    const groundLocalY = this.worldToLocal(
      new Vector3(0, this.groundY - this.embed, 0)
    ).y;

    // Each tree carries its own canopy radius, so a small tree can tuck into
    // a gap a full-size one would not fit.
    const isOverlap = (x, z, treeRadius) => {
      for (const p of positions) {
        if (Math.hypot(x - p.x, z - p.z) < treeRadius + p.radius) return true;
      }
      for (const e of exclusions) {
        // Distance from the tree's center to the nearest point of the
        // keep-out box; inside the box this is 0.
        const dx = Math.max(e.minX - x, 0, x - e.maxX);
        const dz = Math.max(e.minZ - z, 0, z - e.maxZ);
        if (Math.hypot(dx, dz) < treeRadius + this.clearance) return true;
      }
      return false;
    };

    // Original spawn rule: a fixed radius, over the -90°..90° arc.
    const radius = this.radius;
    const minAngle = -Math.PI / 2;
    const maxAngle = Math.PI / 2;

    // Random rejection sampling: cap attempts so a tight packing can never
    // hang the page — it just places as many trees as it reasonably can.
    let attempts = 0;
    const maxAttempts = this.treeNum * 500;
    while (positions.length < this.treeNum && attempts < maxAttempts) {
      attempts++;
      const angle = Math.random() * (maxAngle - minAngle) + minAngle;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = this.minScale + Math.random() * (this.maxScale - this.minScale);
      const treeRadius = TREE_RADIUS * scale;
      // Lift the origin by however far this tree's trunk hangs below it, so
      // the trunk's base lands on the ground whatever size the tree is.
      const baseY = groundLocalY - TREE_MIN_Y * scale;

      if (x ** 2 + z ** 2 < this.noTreeField * radius * radius) continue;
      if (isOverlap(x, z, treeRadius)) continue;
      // Drop any tree that would stick out through the glass.
      if (bounds && !this.fitsInside(x, baseY, z, scale, bounds)) continue;

      positions.push({ x, y: baseY, z, scale, radius: treeRadius });
    }

    this.treePositions = positions;

    // Built once and cloned per tree; the textured trunk material is the
    // expensive part.
    const trunk = new Trunk();

    for (const { x, y, z, scale } of positions) {
      // Each tree is its own group, positioned at the origin, so scaling and
      // spinning it affects the whole tree rather than sliding pieces apart.
      const tree = new Group();

      const t = trunk.clone();
      t.position.set(0, 0, 0);

      const leaf1 = new Leaf(1);
      leaf1.position.set(0, 100, 0);
      const leaf2 = new Leaf(2);
      leaf2.position.set(0, 150, 0);
      const leaf3 = new Leaf(3);
      leaf3.position.set(0, 200, 0);

      const snow1 = new Snow();
      snow1.position.set(20, 200, 20);
      const snow2 = new Snow();
      snow2.position.set(-35, 150, 35);
      const snow3 = new Snow();
      snow3.position.set(40, 50, -40);

      tree.add(t, leaf1, leaf2, leaf3, snow1, snow2, snow3);

      tree.position.set(x, y, z);
      tree.scale.setScalar(scale);
      // Spin each tree so the snow blobs don't all sit on the same side.
      tree.rotation.y = Math.random() * Math.PI * 2;

      this.add(tree);
    }

    return this;
  }
}

export default Trees;
