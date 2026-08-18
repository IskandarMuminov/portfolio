import {
  Group,
  CylinderGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
  SRGBColorSpace,
} from "three";

import baseTexture from "../../../textures/SnowGlobeDemo/img/baseStand.jpg";

class SnowGlobeStand extends Group {
  constructor() {
    super();

    const textureLoader = new TextureLoader();
    const baseMap = textureLoader.load(baseTexture);
    baseMap.colorSpace = SRGBColorSpace;

    const baseRadiusTop = 2;
    const baseRadiusBottom = 3;
    const baseHeight = 1;

    const baseGeometry = new CylinderGeometry(baseRadiusTop, baseRadiusBottom, baseHeight, 32);
    const baseMaterial = new MeshStandardMaterial({
      color: 0x8b4513,
      map: baseMap,
    });
    const base = new Mesh(baseGeometry, baseMaterial);
    base.position.y = baseHeight / 2;
    this.add(base);
  }
}

export default SnowGlobeStand;
