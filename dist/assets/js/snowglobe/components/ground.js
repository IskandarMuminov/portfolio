import {
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  CircleGeometry,
  TextureLoader,
  DoubleSide,
  SRGBColorSpace,
} from "three";
import { createNoise2D } from "simplex-noise";

import groundBase from "../../../textures/SnowGlobeDemo/img/snowColor.jpg";
import groundNormal from "../../../textures/SnowGlobeDemo/img/snowNorm.jpg";
import groundRough from "../../../textures/SnowGlobeDemo/img/snowRough.jpg";
import groundAO from "../../../textures/SnowGlobeDemo/img/snowOCC.jpg";
import snowMeshTextureUrl from "../../../textures/SnowGlobeDemo/img/snowMesh.jpg";

const simplexNoise = createNoise2D();

export default class Ground extends Mesh {
  constructor() {
    const geometry = new CircleGeometry(3, 32);
    super();

    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const noise = simplexNoise(x, y) * 0.1;
      positions[i + 2] += noise;
    }
    geometry.attributes.position.needsUpdate = true;

    const textureLoader = new TextureLoader();
    const baseTexture = textureLoader.load(groundBase);
    baseTexture.colorSpace = SRGBColorSpace;
    const normalMapTexture = textureLoader.load(groundNormal);
    const roughMapTexture = textureLoader.load(groundRough);
    const ambientMapTexture = textureLoader.load(groundAO);
    const snowMeshTexture = textureLoader.load(snowMeshTextureUrl);
    snowMeshTexture.colorSpace = SRGBColorSpace;

    const material = new MeshStandardMaterial({
      map: baseTexture,
      normalMap: normalMapTexture,
      roughnessMap: roughMapTexture,
      roughness: 0.5,
      metalness: 0.1,
      aoMap: ambientMapTexture,
      side: DoubleSide,
    });

    // Snow overlay material
    const overlayMaterial = new MeshStandardMaterial({
      map: snowMeshTexture,
      transparent: true,
      opacity: 1,
      side: DoubleSide,
    });

    const groundMesh = new Mesh(geometry, material);
    groundMesh.rotation.x = MathUtils.degToRad(-90);
    groundMesh.receiveShadow = true;

    const overlayMesh = new Mesh(geometry, overlayMaterial);
    overlayMesh.rotation.x = MathUtils.degToRad(-90);
    overlayMesh.receiveShadow = true;

    this.add(groundMesh);
    this.add(overlayMesh);
  }
}
