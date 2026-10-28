import * as THREE from 'three';
import { DINING_TABLE_CONFIGS } from './waypoints';
import { PALETTE } from '../config';

export class TableVisualsManager {
  private tableVisuals: Map<string, THREE.Group> = new Map();

  constructor(private scene: THREE.Scene) {
    // Initialize a visual container group for each table
    DINING_TABLE_CONFIGS.forEach((table) => {
      const group = new THREE.Group();
      group.position.set(table.tableCenter.x, 0.78, table.tableCenter.z);
      this.scene.add(group);
      this.tableVisuals.set(table.id, group);
    });

    // Takeaway counter food/bag spot
    const takeawayGroup = new THREE.Group();
    takeawayGroup.position.set(8.2, 1.08, 1.55);
    this.scene.add(takeawayGroup);
    this.tableVisuals.set('counter-takeaway', takeawayGroup);
  }

  // Display the served food platter on the table
  public showServedFood(tableId: string, dishId: string) {
    const group = this.tableVisuals.get(tableId);
    if (!group) return;
    this.clearTableVisuals(tableId);

    // Ceramic plate
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xfaf8f2,
      roughness: 0.2,
      metalness: 0.1
    });
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.04, 16), plateMat);
    plate.castShadow = true;
    group.add(plate);

    // Food item mesh on top of plate
    const foodMesh = this.createFoodMesh(dishId);
    foodMesh.position.y = 0.05;
    group.add(foodMesh);
  }

  // Display dirty dishes and tip coins when customer leaves
  public showDirtyTable(tableId: string, tipAmount: number) {
    const group = this.tableVisuals.get(tableId);
    if (!group) return;
    this.clearTableVisuals(tableId);

    // Dirty Plate with crumbs
    const dirtyPlateMat = new THREE.MeshStandardMaterial({
      color: 0xded6c5,
      roughness: 0.4
    });
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.04, 16), dirtyPlateMat);
    group.add(plate);

    // Crumpled napkin
    const napkinMat = new THREE.MeshStandardMaterial({ color: 0xefede6, roughness: 0.9 });
    const napkin = new THREE.Mesh(new THREE.DodecahedronGeometry(0.08), napkinMat);
    napkin.position.set(0.2, 0.06, 0.1);
    group.add(napkin);

    // Tip Coins & Cash
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.85,
      roughness: 0.2
    });
    for (let c = 0; c < 3; c++) {
      const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.015, 10), brassMat);
      coin.position.set(-0.25 + c * 0.06, 0.02, 0.15 + (c % 2) * 0.03);
      group.add(coin);
    }
  }

  // Show Takeaway paper bag on counter
  public showTakeawayBag(show: boolean) {
    const group = this.tableVisuals.get('counter-takeaway');
    if (!group) return;
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }
    if (show) {
      const bagMat = new THREE.MeshStandardMaterial({ color: 0xc49d67, roughness: 0.85 });
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.42, 0.28), bagMat);
      bag.position.y = 0.21;
      bag.castShadow = true;

      // Gold seal sticker
      const sealMat = new THREE.MeshStandardMaterial({ color: PALETTE.brass, metalness: 0.8, roughness: 0.2 });
      const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.01, 10), sealMat);
      seal.rotation.x = Math.PI / 2;
      seal.position.set(0, 0.35, 0.145);

      group.add(bag, seal);
    }
  }

  // Clears the table back to pristine clean
  public clearTableVisuals(tableId: string) {
    const group = this.tableVisuals.get(tableId);
    if (!group) return;
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if ((child as THREE.Mesh).geometry) {
        (child as THREE.Mesh).geometry.dispose();
      }
    }
  }

  private createFoodMesh(dishId: string): THREE.Group {
    const food = new THREE.Group();

    if (dishId === 'dish_pizza') {
      const crustMat = new THREE.MeshStandardMaterial({ color: 0xcc8e43, roughness: 0.7 });
      const crust = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.03, 14), crustMat);
      const cheeseMat = new THREE.MeshStandardMaterial({ color: 0xf5c342, roughness: 0.4 });
      const cheese = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.035, 14), cheeseMat);
      cheese.position.y = 0.01;
      food.add(crust, cheese);

      // Pepperoni slices
      const pepMat = new THREE.MeshStandardMaterial({ color: 0xa8281e, roughness: 0.5 });
      for (let p = 0; p < 5; p++) {
        const pep = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.01, 8), pepMat);
        const ang = (p / 5) * Math.PI * 2;
        pep.position.set(Math.cos(ang) * 0.12, 0.03, Math.sin(ang) * 0.12);
        food.add(pep);
      }
    } else if (dishId === 'dish_burger') {
      const bunMat = new THREE.MeshStandardMaterial({ color: 0xcf8e4e, roughness: 0.6 });
      const meatMat = new THREE.MeshStandardMaterial({ color: 0x4a2318, roughness: 0.8 });
      const saladMat = new THREE.MeshStandardMaterial({ color: 0x48992e, roughness: 0.5 });

      const bBun = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.04, 12), bunMat);
      const patty = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.045, 12), meatMat);
      patty.position.y = 0.04;
      const lettuce = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.02, 10), saladMat);
      lettuce.position.y = 0.07;
      const tBun = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), bunMat);
      tBun.position.y = 0.08;
      food.add(bBun, patty, lettuce, tBun);
    } else if (dishId === 'dish_pasta') {
      const bowlMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.3 });
      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.14, 0.08, 14), bowlMat);
      const pastaMat = new THREE.MeshStandardMaterial({ color: 0xde3b28, roughness: 0.6 });
      const sauce = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), pastaMat);
      sauce.position.y = 0.04;
      food.add(bowl, sauce);
    } else if (dishId === 'dish_sandwich') {
      const breadMat = new THREE.MeshStandardMaterial({ color: 0xdfa968, roughness: 0.7 });
      const bread1 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.28), breadMat);
      bread1.rotation.y = Math.PI / 4;
      const greenMat = new THREE.MeshStandardMaterial({ color: 0x3d8c2c });
      const hamMat = new THREE.MeshStandardMaterial({ color: 0xb54545 });
      const ham = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.26), hamMat);
      ham.rotation.y = Math.PI / 4;
      ham.position.y = 0.03;
      const bread2 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.28), breadMat);
      bread2.rotation.y = Math.PI / 4;
      bread2.position.y = 0.06;
      food.add(bread1, ham, bread2);
    } else {
      // Fried Chicken
      const drumMat = new THREE.MeshStandardMaterial({ color: 0xaf6121, roughness: 0.85 });
      for (let c = 0; c < 2; c++) {
        const piece = new THREE.Mesh(new THREE.DodecahedronGeometry(0.11), drumMat);
        piece.position.set(-0.08 + c * 0.16, 0.06, 0);
        food.add(piece);
      }
    }

    return food;
  }
}
