import {
  BufferGeometry,
  TextureLoader,
  Group,
  PointsMaterial,
  AdditiveBlending,
  Float32BufferAttribute,
  Points,
  Color,
} from "three";

import png1 from "../../../textures/SnowGlobeDemo/snowflakes/snowflake1.png";
import png2 from "../../../textures/SnowGlobeDemo/snowflakes/snowflake2.png";
import png3 from "../../../textures/SnowGlobeDemo/snowflakes/snowflake3.png";
import png4 from "../../../textures/SnowGlobeDemo/snowflakes/snowflake4.png";
import png5 from "../../../textures/SnowGlobeDemo/snowflakes/snowflake5.png";

const snowpng = [png1, png2, png3, png4, png5];

// Snowfalls gets scaled down by 0.005 in index.js (same convention as the
// house/forest/snowman), so 580 here lands at ~2.9 world units — matching
// the glass globe's radius.
const GLOBE_RADIUS = 580;

// Uniform random point inside a sphere: cube-root the radius so density
// stays even by volume instead of clumping toward the center.
function randomPositionInSphere(radius) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.random() * Math.PI;
  const r = Math.cbrt(Math.random()) * radius;
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

class Snowflakes extends Points {
  constructor(geometry, material, fallSpeed = 0.2, globeRadius = GLOBE_RADIUS) {
    super(geometry, material);
    this.fallSpeed = fallSpeed;
    this.initialSpeed = fallSpeed;
    this.globeRadius = globeRadius;
    this.yLowerBound = -globeRadius;
  }

  update(deltaTime) {
    const positions = this.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= this.fallSpeed * deltaTime;

      if (positions[i + 1] < this.yLowerBound) {
        const [x, y, z] = randomPositionInSphere(this.globeRadius);
        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
      }
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  setBaseSpeed(v) {
    this.fallSpeed = this.initialSpeed * v;
  }
}

class Snowfalls extends Group {
  constructor(count = 300) {
    super();
    this.textureCount = snowpng.length;
    this.baseSpeed = 0.5;

    const textureLoader = new TextureLoader();
    const snowflakeMaterials = [];
    const colour = new Color('grey');
    snowpng.forEach((png, i) => {
      snowflakeMaterials.push(
        new PointsMaterial({
          size: 3,
          map: textureLoader.load(png),
          blending: AdditiveBlending,
          depthTest: false,
          transparent: true,
          opacity: 0.03,
          color: colour,
        })
      );
    });

    for (let i = 0; i < this.textureCount; i++) {
      const positions = [];
      for (let j = 0; j < count / this.textureCount; j++) {
        positions.push(...randomPositionInSphere(GLOBE_RADIUS));
      }
      const geometry = new BufferGeometry();
      geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
      this.add(new Snowflakes(geometry, snowflakeMaterials[i]));
    }
  }

  update(deltaTime) {
    this.children.forEach((snowflakes) => snowflakes.update(deltaTime));
  }

  setBaseSpeed(v) {
    this.baseSpeed = v;
    this.children.forEach((element) => element.setBaseSpeed(v));
  }

  getBaseSpeed() {
    return this.baseSpeed;
  }
}

export default Snowfalls;
