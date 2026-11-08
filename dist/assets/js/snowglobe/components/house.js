import {
  Mesh,
  ConeGeometry,
  Group,
  CylinderGeometry,
  TextureLoader,
  MeshStandardMaterial,
  PlaneGeometry,
  BoxGeometry,
  SubtractiveBlending,
  SRGBColorSpace,
} from "three";

// wall: https://3dtextures.me/2021/03/26/stylized-bricks-001/
import wallBase from "../../../textures/SnowGlobeDemo/Stylized_Bricks_001_SD/Stylized_Bricks_001_basecolor.jpg";
import wallNormal from "../../../textures/SnowGlobeDemo/Stylized_Bricks_001_SD/Stylized_Bricks_001_normal.jpg";
import wallHeight from "../../../textures/SnowGlobeDemo/Stylized_Bricks_001_SD/Stylized_Bricks_001_height.png";
import wallRough from "../../../textures/SnowGlobeDemo/Stylized_Bricks_001_SD/Stylized_Bricks_001_roughness.jpg";
import wallAO from "../../../textures/SnowGlobeDemo/Stylized_Bricks_001_SD/Stylized_Bricks_001_ambientOcclusion.jpg";
// poll: https://3dtextures.me/2022/02/25/bark-pine-003/
import pollBase from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_BaseColor.jpg";
import pollNormal from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_Normal.jpg";
import pollHeight from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_Height.png";
import pollRough from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_Roughness.jpg";
import pollAO from "../../../textures/SnowGlobeDemo/Bark_Pine_003_SD/Bark_Pine_003_AmbientOcclusion.jpg";
// roof: https://3dtextures.me/2019/11/06/roof-tiles-terracotta-003/
import roofBase from "../../../textures/SnowGlobeDemo/Roof_Tiles_Terracotta_003_SD/Roof_Tiles_Terracotta_003_basecolor.jpg";
import roofNormal from "../../../textures/SnowGlobeDemo/Roof_Tiles_Terracotta_003_SD/Roof_Tiles_Terracotta_003_normal.jpg";
import roofHeight from "../../../textures/SnowGlobeDemo/Roof_Tiles_Terracotta_003_SD/Roof_Tiles_Terracotta_003_height.png";
import roofRough from "../../../textures/SnowGlobeDemo/Roof_Tiles_Terracotta_003_SD/Roof_Tiles_Terracotta_003_roughness.jpg";
import roofAO from "../../../textures/SnowGlobeDemo/Roof_Tiles_Terracotta_003_SD/Roof_Tiles_Terracotta_003_ambientOcclusion.jpg";
// chimney: https://3dtextures.me/2022/04/03/wall-stone-023/
import chimneyBase from "../../../textures/SnowGlobeDemo/Wall_Stone_023_SD/Wall_Stone_023_BaseColor.jpg";
import chimneyNormal from "../../../textures/SnowGlobeDemo/Wall_Stone_023_SD/Wall_Stone_023_Normal.jpg";
import chimneyHeight from "../../../textures/SnowGlobeDemo/Wall_Stone_023_SD/Wall_Stone_023_Height.png";
import chimneyRough from "../../../textures/SnowGlobeDemo/Wall_Stone_023_SD/Wall_Stone_023_Roughness.jpg";
import chimneyAO from "../../../textures/SnowGlobeDemo/Wall_Stone_023_SD/Wall_Stone_023_AmbientOcclusion.jpg";
// door: https://3dtextures.me/2020/05/29/wood-gate-fortified-003/
import doorBase from "../../../textures/SnowGlobeDemo/Wood_Gate_Fortified_003_SD/Wood_Gate_Fortified_003_basecolor.jpg";
import doorNormal from "../../../textures/SnowGlobeDemo/Wood_Gate_Fortified_003_SD/Wood_Gate_Fortified_003_normal.jpg";
import doorHeight from "../../../textures/SnowGlobeDemo/Wood_Gate_Fortified_003_SD/Wood_Gate_Fortified_003_height.png";
import doorRough from "../../../textures/SnowGlobeDemo/Wood_Gate_Fortified_003_SD/Wood_Gate_Fortified_003_roughness.jpg";
import doorAO from "../../../textures/SnowGlobeDemo/Wood_Gate_Fortified_003_SD/Wood_Gate_Fortified_003_ambientOcclusion.jpg";
// smoke
import smokeColor from "../../../textures/SnowGlobeDemo/smoke.jpeg";

const textureLoader = new TextureLoader();

// Base-color maps are sRGB-encoded like any normal image; three.js no longer
// assumes this, so it must be set explicitly or textures render washed out.
function loadColorTexture(url) {
  const texture = textureLoader.load(url);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

class Roof extends Mesh {
  constructor() {
    const geometry = new ConeGeometry(170, 200, 100);
    const material = new MeshStandardMaterial({
      map: loadColorTexture(roofBase),
      normalMap: textureLoader.load(roofNormal),
      displacementMap: textureLoader.load(roofHeight),
      displacementScale: 5,
      roughnessMap: textureLoader.load(roofRough),
      roughness: 0.5,
      aoMap: textureLoader.load(roofAO),
    });
    super(geometry, material);
  }
}

class Wall extends Mesh {
  constructor() {
    const geometry = new BoxGeometry(200, 200, 200, 32, 32, 32);
    const material = new MeshStandardMaterial({
      map: loadColorTexture(wallBase),
      normalMap: textureLoader.load(wallNormal),
      displacementMap: textureLoader.load(wallHeight),
      displacementScale: 10,
      roughnessMap: textureLoader.load(wallRough),
      roughness: 0.5,
      aoMap: textureLoader.load(wallAO),
    });
    super(geometry, material);
  }
}

class Poll extends Mesh {
  constructor() {
    const geometry = new CylinderGeometry(10, 10, 180, 50, 32);
    const material = new MeshStandardMaterial({
      map: loadColorTexture(pollBase),
      normalMap: textureLoader.load(pollNormal),
      displacementMap: textureLoader.load(pollHeight),
      displacementScale: 10,
      roughnessMap: textureLoader.load(pollRough),
      roughness: 0.5,
      aoMap: textureLoader.load(pollAO),
    });
    super(geometry, material);
  }
}

class Door extends Mesh {
  constructor() {
    const geometry = new PlaneGeometry(60, 120, 64, 64);
    const material = new MeshStandardMaterial({
      map: loadColorTexture(doorBase),
      normalMap: textureLoader.load(doorNormal),
      displacementMap: textureLoader.load(doorHeight),
      displacementScale: 10,
      roughnessMap: textureLoader.load(doorRough),
      roughness: 0.5,
      aoMap: textureLoader.load(doorAO),
    });
    super(geometry, material);
  }
}

class Chimney extends Mesh {
  constructor() {
    const geometry = new CylinderGeometry(20, 20, 200, 50, 32);
    const material = new MeshStandardMaterial({
      map: loadColorTexture(chimneyBase),
      normalMap: textureLoader.load(chimneyNormal),
      displacementMap: textureLoader.load(chimneyHeight),
      displacementScale: 1,
      roughnessMap: textureLoader.load(chimneyRough),
      roughness: 0.5,
      aoMap: textureLoader.load(chimneyAO),
    });
    super(geometry, material);
  }
}

class Smoke extends Mesh {
  constructor() {
    // No displacementMap on this material, so it's a flat card — no need for subdivisions.
    const geometry = new PlaneGeometry(200, 200, 1, 1);
    const material = new MeshStandardMaterial({
      map: loadColorTexture(smokeColor),
      depthTest: false,
      blending: SubtractiveBlending,
      opacity: 0.7,
    });
    super(geometry, material);
  }
}

export default class House extends Group {
  x = 100;
  y = 0;
  z = -250;

  constructor() {
    super();

    const roof = new Roof();
    roof.position.set(this.x, this.y + 180, this.z);

    const wall = new Wall();
    wall.position.set(this.x, this.y, this.z);

    const poll = new Poll();
    const poll1 = poll.clone();
    poll1.position.set(this.x + 100, this.y, this.z + 100);
    const poll2 = poll.clone();
    poll2.position.set(this.x - 100, this.y, this.z - 100);
    const poll3 = poll.clone();
    poll3.position.set(this.x + 100, this.y, this.z - 100);
    const poll4 = poll.clone();
    poll4.position.set(this.x - 100, this.y, this.z + 100);

    const door = new Door();
    door.position.set(this.x + 30, this.y - 30, this.z + 105);

    const chimney = new Chimney();
    chimney.position.set(this.x + 80, this.y + 100, this.z + 80);

    const smoke = new Smoke();
    smoke.position.set(this.x + 80, this.y + 300, this.z + 80);

    this.add(roof, wall, poll1, poll2, poll3, poll4, door, chimney, smoke);
  }
}
