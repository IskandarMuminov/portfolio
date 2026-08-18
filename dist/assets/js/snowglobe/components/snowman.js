import {
  Mesh,
  CylinderGeometry,
  MeshStandardMaterial,
  SphereGeometry,
  Group,
  MathUtils,
  BoxGeometry,
  MeshToonMaterial,
} from "three";

export default class SnowMan extends Group {
  constructor() {
    super();
    const buttonGeometry = new BoxGeometry(5, 5, 5);

    const hatMaterial = new MeshStandardMaterial({ color: 0x333333 });
    const headMaterial = new MeshStandardMaterial({ color: 0xffffff });
    const buttonMaterial = new MeshStandardMaterial({ color: 0x228b22 });
    const eyeMaterial = new MeshToonMaterial({ color: 0x000000 });

    const hat = new Mesh(new CylinderGeometry(25, 25, 40, 30), hatMaterial);
    hat.position.set(0, 50, 0);

    const hatLine = new Mesh(
      new CylinderGeometry(26, 25, 12, 30),
      new MeshStandardMaterial({ color: 0xe60033 })
    );
    hatLine.position.set(0, 35, 0);

    const hatCollar = new Mesh(new CylinderGeometry(40, 40, 5, 30), hatMaterial);
    hatCollar.position.set(0, 32, 0);

    const head = new Mesh(new SphereGeometry(40, 32, 32), headMaterial);
    head.position.set(0, 0, 0);

    const rightEye = new Mesh(new SphereGeometry(5, 25, 40), eyeMaterial);
    rightEye.position.set(15, 18, 30);

    const leftEye = new Mesh(new SphereGeometry(5, 10, 40), eyeMaterial);
    leftEye.position.set(-16, 18, 33);

    const nose = new Mesh(
      new SphereGeometry(5, 30, 20),
      new MeshStandardMaterial({ color: 0xed9121 })
    );
    nose.position.set(3, 10, 35);

    const body = new Mesh(new SphereGeometry(50, 32, 32), headMaterial);
    body.position.set(0, -60, 0);

    const buttonFirst = new Mesh(buttonGeometry, buttonMaterial);
    buttonFirst.position.set(0, -30, 37);

    const buttonSecond = new Mesh(buttonGeometry, buttonMaterial);
    buttonSecond.position.set(0, -40, 43);

    const armGeometry = new CylinderGeometry(3, 3, 35, 32);
    const armMaterial = new MeshStandardMaterial({ color: 0x8b4513 });

    const leftArm = new Mesh(armGeometry, armMaterial);
    leftArm.position.set(-55, -30, 15);
    leftArm.rotation.set(0, 0, MathUtils.degToRad(45));

    const rightArm = new Mesh(armGeometry, armMaterial);
    rightArm.position.set(55, -30, 15);
    rightArm.rotation.set(0, 0, MathUtils.degToRad(-45));

    this.add(
      hat,
      hatLine,
      hatCollar,
      head,
      rightEye,
      leftEye,
      nose,
      body,
      buttonFirst,
      buttonSecond,
      leftArm,
      rightArm
    );
  }
}
