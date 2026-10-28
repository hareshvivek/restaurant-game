import * as THREE from 'three';
import { PALETTE, PLAYER_CONFIG, ZONES } from './config';
import { PhysicsSystem } from './physics';
import { sounds } from './audio';

export class Player {
  public mesh: THREE.Group;
  public position: THREE.Vector3;
  private velocity: THREE.Vector2 = new THREE.Vector2(0, 0);
  private facingAngle: number = 0;
  private walkCycle: number = 0;
  private stepTimer: number = 0;

  // Sub-components for animation
  private bodyGroup: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private shadowMesh: THREE.Mesh;
  private chefHat: THREE.Group;

  constructor(startX: number = -4, startZ: number = 6) {
    this.mesh = new THREE.Group();
    this.position = new THREE.Vector3(startX, 0, startZ);
    this.mesh.position.copy(this.position);

    // Dynamic drop shadow
    const shadowGeo = new THREE.CircleGeometry(0.5, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x111115,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.02;
    this.mesh.add(this.shadowMesh);

    // Body group containing character limbs & head
    this.bodyGroup = new THREE.Group();
    this.mesh.add(this.bodyGroup);

    // Pants / Legs
    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x222428,
      roughness: 0.8
    });
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.6, 12), pantsMat);
    leftLeg.position.set(-0.16, 0.3, 0);
    leftLeg.castShadow = true;
    this.bodyGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.6, 12), pantsMat);
    rightLeg.position.set(0.16, 0.3, 0);
    rightLeg.castShadow = true;
    this.bodyGroup.add(rightLeg);

    // Shoes
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x151618, roughness: 0.5 });
    const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.26), shoeMat);
    leftShoe.position.set(-0.16, 0.05, 0.04);
    this.bodyGroup.add(leftShoe);

    const rightShoe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.26), shoeMat);
    rightShoe.position.set(0.16, 0.05, 0.04);
    this.bodyGroup.add(rightShoe);

    // Torso (Cheerful Coral waistcoat with soft cream shirt)
    const torsoMat = new THREE.MeshStandardMaterial({
      color: PALETTE.coral,
      roughness: 0.6,
      metalness: 0.05
    });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.38), torsoMat);
    torso.position.y = 0.88;
    torso.castShadow = true;
    this.bodyGroup.add(torso);

    // Cream shirt inner / apron front
    const shirtMat = new THREE.MeshStandardMaterial({
      color: PALETTE.cream,
      roughness: 0.4
    });
    const shirtBib = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.5, 0.02), shirtMat);
    shirtBib.position.set(0, 0.92, 0.2);
    this.bodyGroup.add(shirtBib);

    // Soft yellow / golden buttons
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.softYellowDark,
      metalness: 0.6,
      roughness: 0.3
    });
    for (let i = 0; i < 3; i++) {
      const button = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 8), brassMat);
      button.rotation.x = Math.PI / 2;
      button.position.set(0, 0.78 + i * 0.1, 0.21);
      this.bodyGroup.add(button);
    }

    // Arms
    const sleeveMat = new THREE.MeshStandardMaterial({ color: PALETTE.coral, roughness: 0.6 });
    const handMat = new THREE.MeshStandardMaterial({ color: 0xf2c49b, roughness: 0.6 });

    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.35, 1.1, 0);
    const lUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.45, 10), sleeveMat);
    lUpper.position.y = -0.2;
    lUpper.castShadow = true;
    const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), handMat);
    lHand.position.y = -0.42;
    this.leftArm.add(lUpper, lHand);
    this.bodyGroup.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.35, 1.1, 0);
    const rUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.45, 10), sleeveMat);
    rUpper.position.y = -0.2;
    rUpper.castShadow = true;
    const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), handMat);
    rHand.position.y = -0.42;
    this.rightArm.add(rUpper, rHand);
    this.bodyGroup.add(this.rightArm);

    // Head
    const headMat = new THREE.MeshStandardMaterial({ color: 0xf2c49b, roughness: 0.7 });
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), headMat);
    head.position.y = 1.45;
    head.castShadow = true;
    this.bodyGroup.add(head);

    // Walnut hair
    const hairMat = new THREE.MeshStandardMaterial({ color: PALETTE.walnutDark, roughness: 0.9 });
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), hairMat);
    hair.position.y = 1.5;
    this.bodyGroup.add(hair);

    // Chef Hat (Toque)
    this.chefHat = new THREE.Group();
    this.chefHat.position.set(0, 1.62, 0);

    const hatMat = new THREE.MeshStandardMaterial({
      color: 0xfbfbf8,
      roughness: 0.4
    });
    // Hat headband with brass trim
    const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 16), brassMat);
    hatBand.position.y = 0.06;
    this.chefHat.add(hatBand);

    // Crown of toque
    const hatCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.19, 0.35, 16), hatMat);
    hatCrown.position.y = 0.28;
    hatCrown.castShadow = true;
    this.chefHat.add(hatCrown);

    const hatPuff = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 10), hatMat);
    hatPuff.position.y = 0.45;
    hatPuff.scale.set(1.05, 0.5, 1.05);
    this.chefHat.add(hatPuff);

    this.bodyGroup.add(this.chefHat);

    // Carried Item 3D Platter & Floating Badge
    this.carriedItemGroup = new THREE.Group();
    this.carriedItemGroup.position.set(0, 0.85, 0.45);
    this.carriedItemGroup.visible = false;

    // Small brass carrying platter
    const platterGeo = new THREE.CylinderGeometry(0.24, 0.22, 0.03, 16);
    const platterMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.85,
      roughness: 0.25
    });
    const platterMesh = new THREE.Mesh(platterGeo, platterMat);
    this.carriedItemGroup.add(platterMesh);

    // Dynamic 3D carried item icon billboard
    this.carriedItemCanvas = document.createElement('canvas');
    this.carriedItemCanvas.width = 256;
    this.carriedItemCanvas.height = 96;
    this.carriedItemTexture = new THREE.CanvasTexture(this.carriedItemCanvas);
    this.carriedItemTexture.colorSpace = THREE.SRGBColorSpace;

    const carriedSpriteMat = new THREE.SpriteMaterial({
      map: this.carriedItemTexture,
      transparent: true,
      depthTest: false
    });
    this.carriedItemSprite = new THREE.Sprite(carriedSpriteMat);
    this.carriedItemSprite.scale.set(0.9, 0.35, 1);
    this.carriedItemSprite.position.set(0, 0.32, 0);
    this.carriedItemGroup.add(this.carriedItemSprite);

    this.bodyGroup.add(this.carriedItemGroup);
  }

  private carriedItemGroup: THREE.Group;
  private carriedItemCanvas: HTMLCanvasElement;
  private carriedItemTexture: THREE.CanvasTexture;
  private carriedItemSprite: THREE.Sprite;

  public setCarriedItemVisual(item: { name: string; icon: string } | null) {
    if (!item) {
      this.carriedItemGroup.visible = false;
      return;
    }

    this.carriedItemGroup.visible = true;
    const ctx = this.carriedItemCanvas.getContext('2d')!;
    const w = this.carriedItemCanvas.width;
    const h = this.carriedItemCanvas.height;
    ctx.clearRect(0, 0, w, h);

    // Background pill
    ctx.fillStyle = 'rgba(20, 21, 24, 0.9)';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (typeof (ctx as unknown as { roundRect?: Function }).roundRect === 'function') {
      (ctx as unknown as { roundRect: Function }).roundRect(6, 6, w - 12, h - 12, 16);
    } else {
      ctx.rect(6, 6, w - 12, h - 12);

    }
    ctx.fill();
    ctx.stroke();

    // Item icon & text
    ctx.font = '36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.icon, w / 2, 44);

    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = '#fbf7ee';
    const carriedAny = item as { name: string; icon: string; targetLocationName?: string };
    const label = carriedAny.targetLocationName ? `${carriedAny.targetLocationName}` : item.name;
    const truncated = label.length > 16 ? label.slice(0, 15) + '…' : label;
    ctx.fillText(truncated, w / 2, 74);

    this.carriedItemTexture.needsUpdate = true;
  }

  public update(
    inputDir: { x: number; z: number },
    delta: number,
    physics: PhysicsSystem
  ): { x: number; z: number; zone: string } {
    const isMoving = inputDir.x !== 0 || inputDir.z !== 0;
    const targetSpeed = isMoving ? PLAYER_CONFIG.moveSpeed : 0;
    const accel = isMoving ? PLAYER_CONFIG.acceleration : PLAYER_CONFIG.deceleration;

    // Target velocity
    const targetVx = inputDir.x * targetSpeed;
    const targetVz = inputDir.z * targetSpeed;

    this.velocity.x += (targetVx - this.velocity.x) * Math.min(1, accel * delta);
    this.velocity.y += (targetVz - this.velocity.y) * Math.min(1, accel * delta);

    const currentSpeed = Math.hypot(this.velocity.x, this.velocity.y);

    if (currentSpeed > 0.05) {
      // Rotate toward movement direction
      const moveAngle = Math.atan2(this.velocity.x, this.velocity.y);
      let angleDiff = moveAngle - this.facingAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      this.facingAngle += angleDiff * Math.min(1, PLAYER_CONFIG.turnSpeed * delta);
      this.mesh.rotation.y = this.facingAngle;

      // Displace with collision
      const dx = this.velocity.x * delta;
      const dz = this.velocity.y * delta;
      const resolved = physics.moveWithCollision(
        this.position.x,
        this.position.z,
        dx,
        dz,
        PLAYER_CONFIG.radius
      );

      this.position.x = resolved.x;
      this.position.z = resolved.z;
      this.mesh.position.x = this.position.x;
      this.mesh.position.z = this.position.z;

      // Walking animations
      this.walkCycle += currentSpeed * delta * 2.8;
      const bob = Math.abs(Math.sin(this.walkCycle)) * 0.08;
      this.bodyGroup.position.y = bob;
      this.bodyGroup.rotation.z = Math.sin(this.walkCycle) * 0.04;
      this.bodyGroup.rotation.x = 0.05; // slight forward lean

      // Arms swing
      this.leftArm.rotation.x = Math.sin(this.walkCycle) * 0.7;
      this.rightArm.rotation.x = -Math.sin(this.walkCycle) * 0.7;

      // Footstep sound
      this.stepTimer += delta * currentSpeed;
      if (this.stepTimer > 1.9) {
        sounds.playFootstep();
        this.stepTimer = 0;
      }
    } else {
      // Idle breathing
      const idleTime = performance.now() * 0.0025;
      this.bodyGroup.position.y = Math.sin(idleTime) * 0.02;
      this.bodyGroup.rotation.z = 0;
      this.bodyGroup.rotation.x = 0;
      this.leftArm.rotation.x = Math.sin(idleTime) * 0.05;
      this.rightArm.rotation.x = -Math.sin(idleTime) * 0.05;
    }

    // Determine current zone
    const currentZone = this.calculateZone(this.position.x, this.position.z);

    return {
      x: this.position.x,
      z: this.position.z,
      zone: currentZone
    };
  }

  private calculateZone(x: number, z: number): string {
    if (x <= -5.5 && z <= -1.5) {
      return ZONES.RESTROOM.name;
    }
    if (x >= 2.0 && z <= 0.0) {
      return ZONES.KITCHEN.name;
    }
    if (x >= 2.0 && z > 0.0 && z <= 8.5) {
      return ZONES.COUNTER.name;
    }
    return ZONES.DINING.name;
  }
}
