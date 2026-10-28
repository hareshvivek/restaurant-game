import * as THREE from 'three';
import { PALETTE, ZONES } from './config';
import { PhysicsSystem } from './physics';
import { InteractionSystem } from './interaction';
import { createWoodPlankTexture } from './textures';

export class RestaurantWorld {
  public group: THREE.Group;
  private interactiveMarkers: THREE.Mesh[] = [];

  constructor(
    private scene: THREE.Scene,
    private physics: PhysicsSystem,
    private interactions: InteractionSystem
  ) {
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.buildFloors();
    this.buildPerimeterAndDividers();
    this.buildKitchenZone();
    this.buildCounterZone();
    this.buildDiningZone();
    this.buildRestroomZone();
    this.buildAtmosphericProps();
  }

  // =========================================================================
  // 1. FLOORS FOR ALL FOUR ZONES (Warm Wood & Fresh Tiles)
  // =========================================================================
  private buildFloors() {
    // Shared floor base slab (Warm light clay base)
    const baseSlabMat = new THREE.MeshStandardMaterial({
      color: 0x3a3028,
      roughness: 0.9
    });
    const baseSlab = new THREE.Mesh(new THREE.BoxGeometry(38, 0.4, 30), baseSlabMat);
    baseSlab.position.set(0, -0.21, 0);
    baseSlab.receiveShadow = true;
    this.group.add(baseSlab);

    // 1. Main Dining & Counter Area: Warm Honey Oak Wood Plank Texture
    const diningWoodTex = createWoodPlankTexture(PALETTE.warmWood, {
      columns: 6,
      grainIntensity: 0.16,
      knots: true
    });
    diningWoodTex.repeat.set(24, 7);
    const premiumWoodFloorMat = new THREE.MeshStandardMaterial({
      color: PALETTE.warmWood,
      map: diningWoodTex,
      roughness: 0.48,
      metalness: 0.04
    });

    const mainWoodFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 17.3),
      premiumWoodFloorMat
    );
    mainWoodFloor.rotation.x = -Math.PI / 2;
    mainWoodFloor.position.set(0.5, 0.002, 4.85);
    mainWoodFloor.receiveShadow = true;
    this.group.add(mainWoodFloor);

    // 2. Connecting Space between Kitchen and Restroom Warm Oak Floor
    const corridorWoodTex = createWoodPlankTexture(PALETTE.warmWood, {
      columns: 6,
      grainIntensity: 0.16,
      knots: true
    });
    corridorWoodTex.repeat.set(8, 4);
    const corridorWoodFloorMat = new THREE.MeshStandardMaterial({
      color: PALETTE.warmWood,
      map: corridorWoodTex,
      roughness: 0.48,
      metalness: 0.04
    });

    const corridorWoodFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(10.8, 9.7),
      corridorWoodFloorMat
    );
    corridorWoodFloor.rotation.x = -Math.PI / 2;
    corridorWoodFloor.position.set(-1.4, 0.002, -8.65);
    corridorWoodFloor.receiveShadow = true;
    this.group.add(corridorWoodFloor);

    // Warm brass / gold threshold strips at zone transitions
    const brassTrimMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.75,
      roughness: 0.25
    });
    // Threshold to kitchen
    const kitchenThreshold = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.012, 11), brassTrimMat);
    kitchenThreshold.position.set(3.95, 0.006, -8.0);
    this.group.add(kitchenThreshold);
    // Threshold to restroom
    const restroomThreshold = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.012, 9.5), brassTrimMat);
    restroomThreshold.position.set(-6.75, 0.006, -8.5);
    this.group.add(restroomThreshold);

    // 3. Kitchen Floor: Fresh Mint Green & Cream Checkerboard Tiles
    const kitchenTileGroup = new THREE.Group();
    const mintTileMat = new THREE.MeshStandardMaterial({ color: PALETTE.mint, roughness: 0.45 });
    const creamTileMat = new THREE.MeshStandardMaterial({ color: PALETTE.creamDark, roughness: 0.38 });
    const tileSize = 1.0;
    const kWidth = 14;
    const kDepth = 11;
    const kStartX = 4;
    const kStartZ = -13.5;

    for (let ix = 0; ix < kWidth; ix++) {
      for (let iz = 0; iz < kDepth; iz++) {
        const mat = (ix + iz) % 2 === 0 ? mintTileMat : creamTileMat;
        const tile = new THREE.Mesh(new THREE.PlaneGeometry(tileSize - 0.04, tileSize - 0.04), mat);
        tile.rotation.x = -Math.PI / 2;
        tile.position.set(kStartX + ix * tileSize, 0.003, kStartZ + iz * tileSize);
        tile.receiveShadow = true;
        kitchenTileGroup.add(tile);
      }
    }
    this.group.add(kitchenTileGroup);

    // 4. Restroom Floor: Clean Mint-Sage Wooden Plank Pattern
    const bathroomWoodTex = createWoodPlankTexture(PALETTE.mintLight, {
      columns: 6,
      grainIntensity: 0.14,
      knots: false
    });
    bathroomWoodTex.repeat.set(7, 4);
    const restroomFloorMat = new THREE.MeshStandardMaterial({
      color: PALETTE.mintLight,
      map: bathroomWoodTex,
      roughness: 0.45,
      metalness: 0.03
    });
    const restroomFloor = new THREE.Mesh(new THREE.PlaneGeometry(9.5, 9.5), restroomFloorMat);
    restroomFloor.rotation.x = -Math.PI / 2;
    restroomFloor.position.set(-11.5, 0.003, -8.5);
    restroomFloor.receiveShadow = true;
    this.group.add(restroomFloor);
  }

  // =========================================================================
  // 2. WALLS, DIVIDERS & CONNECTED DOORWAYS
  // =========================================================================
  private buildPerimeterAndDividers() {
    const wallMat = new THREE.MeshStandardMaterial({
      color: PALETTE.cream,
      roughness: 0.85
    });
    const wallTrimMat = new THREE.MeshStandardMaterial({
      color: PALETTE.warmWoodDark,
      roughness: 0.65
    });
    const wainscotMat = new THREE.MeshStandardMaterial({
      color: PALETTE.creamDark,
      roughness: 0.75
    });
    const wainscotBeadMat = new THREE.MeshStandardMaterial({
      color: PALETTE.mint,
      roughness: 0.6
    });

    const createWallSegment = (
      id: string,
      x: number,
      z: number,
      w: number,
      d: number,
      h: number = 3.2,
      hasWainscot: boolean = true
    ) => {
      const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
      wallMesh.position.set(x, h / 2, z);
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      this.group.add(wallMesh);

      // Walnut top cap
      const capMesh = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.12, d + 0.06), wallTrimMat);
      capMesh.position.set(x, h + 0.06, z);
      this.group.add(capMesh);

      if (hasWainscot && h >= 2.0) {
        // Soft cream lower wainscot with mint trim bead
        const wainscot = new THREE.Mesh(new THREE.BoxGeometry(w + 0.02, 1.1, d + 0.02), wainscotMat);
        wainscot.position.set(x, 0.55, z);
        this.group.add(wainscot);

        const bead = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, 0.06, d + 0.04), wainscotBeadMat);
        bead.position.set(x, 1.1, z);
        this.group.add(bead);
      }

      this.physics.addBox(id, 'Wall', x, z, w, d);
    };

    // --- NORTH WALL (Rear wall spanning full width) ---
    // Total X: -16.5 to +17.5 = 34m width
    createWallSegment('wall-north', 0.5, -13.5, 34, 0.6, 3.2);

    // --- WEST WALL (Left side spanning depth) ---
    createWallSegment('wall-west', -16.5, 0, 0.6, 27, 3.2);

    // --- EAST WALL (Right side spanning depth) ---
    createWallSegment('wall-east', 17.5, 0, 0.6, 27, 3.2);

    // --- SOUTH WALL (Low isometric boundary on camera side) ---
    // Cut low (0.5m) so camera view is pristine, but player cannot walk out!
    // Leaves entrance opening at Dining Area X: -8 to -4
    createWallSegment('wall-south-left', -13.5, 13.5, 5.5, 0.5, 0.6, false);
    createWallSegment('wall-south-mid', 2.0, 13.5, 11, 0.5, 0.6, false);
    createWallSegment('wall-south-right', 13.5, 13.5, 8, 0.5, 0.6, false);

    // --- INTERIOR DIVIDER 1: RESTROOM ENCLOSURE ---
    // Restroom is in North-West (-16 to -7, -13.5 to -4)
    // East wall of restroom (-7.0): has doorway opening at Z = -8.5
    createWallSegment('restroom-east-top', -6.8, -11.5, 0.4, 4.0, 3.0);
    createWallSegment('restroom-east-bottom', -6.8, -5.5, 0.4, 3.0, 3.0);
    // Doorway opening header arch
    const archMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.6 });
    const arch1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 2.5), archMat);
    arch1.position.set(-6.8, 2.7, -8.2);
    this.group.add(arch1);

    // South wall of restroom (Z = -4.0):
    createWallSegment('restroom-south', -11.8, -3.8, 9.6, 0.4, 3.0);

    // Restroom entrance sign
    const signMat = new THREE.MeshStandardMaterial({ color: PALETTE.mint, roughness: 0.35 });
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.35, 1.2), signMat);
    signMesh.position.set(-6.55, 2.3, -8.2);
    this.group.add(signMesh);

    // --- INTERIOR DIVIDER 2: KITCHEN ENCLOSURE & PASSAGE ---
    // Kitchen is North-East (+3.5 to +17.5, -13.5 to -2.5)
    // West dividing wall separating Dining Hall from Kitchen:
    // Has a wide 3.0m open door/archway at Z = -4.5
    createWallSegment('kitchen-west-top', 3.5, -10.5, 0.4, 5.5, 3.0);
    createWallSegment('kitchen-west-bottom', 3.5, -3.0, 0.4, 2.0, 3.0);
    const arch2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 3.2), archMat);
    arch2.position.set(3.5, 2.7, -6.0);
    this.group.add(arch2);

    // Kitchen to Counter service wall divider:
    // Kitchen South wall (Z = -2.5) with open pass-through window
    createWallSegment('kitchen-south-left', 6.0, -2.5, 4.5, 0.4, 3.0);
    createWallSegment('kitchen-south-right', 16.0, -2.5, 3.0, 0.4, 3.0);

    // Pass-through service window counter ledge (X: 8.5 to 14.5)
    const passShelfMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWood, roughness: 0.5 });
    const passLedge = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.15, 0.8), passShelfMat);
    passLedge.position.set(11.5, 1.05, -2.5);
    this.group.add(passLedge);
    this.physics.addBox('pass-window-counter', 'Pass Window', 11.5, -2.5, 6.0, 0.6);
  }

  // =========================================================================
  // 3. KITCHEN ZONE: Commercial Stoves, Prep, Fridge, Sinks, Racks
  // =========================================================================
  private buildKitchenZone() {
    const stainlessMat = new THREE.MeshStandardMaterial({
      color: PALETTE.stainless,
      metalness: 0.85,
      roughness: 0.25
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.8,
      roughness: 0.2
    });
    const castIronMat = new THREE.MeshStandardMaterial({
      color: PALETTE.charcoal,
      roughness: 0.85
    });

    // 1. Commercial 6-Burner Gas Range with Exhaust Hood
    const stoveGroup = new THREE.Group();
    stoveGroup.position.set(6.5, 0, -12.5);

    const stoveBody = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.95, 1.3), stainlessMat);
    stoveBody.position.y = 0.475;
    stoveBody.castShadow = true;
    stoveGroup.add(stoveBody);

    // Burner grates
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 3; c++) {
        const grate = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.45), castIronMat);
        grate.position.set(-1.0 + c * 1.0, 0.98, -0.3 + r * 0.55);
        stoveGroup.add(grate);

        // Brass control knobs
        const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 10), brassMat);
        knob.rotation.x = Math.PI / 2;
        knob.position.set(-1.0 + c * 1.0, 0.78, 0.66);
        stoveGroup.add(knob);
      }
    }

    // Overhead Stainless Exhaust Hood
    const hood = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.7, 1.4), stainlessMat);
    hood.position.set(0, 2.3, 0);
    stoveGroup.add(hood);

    this.group.add(stoveGroup);
    this.physics.addBox('kitchen-stove', 'Commercial Range & Grill', 6.5, -12.5, 3.4, 1.5);

    this.interactions.register({
      id: 'station-stove',
      name: 'Stovetop Range & Grill',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Examine Stovetop & Grill',
      detailTitle: 'Stovetop Range & Sizzle Grill',
      detailDescription: 'Heavy-duty commercial burners and flat-top sizzle grill. Used for grilling prime beef patties and simmering savory pasta marinara.',
      category: 'kitchen',
      x: 6.5,
      z: -11.4,
      interactionRadius: 1.8,
      icon: 'flame'
    });
    this.createInteractionBeacon(6.5, -11.4);

    // 2. Commercial Stone Pizza Deck Oven (New Cooking Station)
    const ovenGroup = new THREE.Group();
    ovenGroup.position.set(9.8, 0, -12.5);

    const ovenBody = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 1.3), stainlessMat);
    ovenBody.position.y = 0.7;
    ovenBody.castShadow = true;
    ovenGroup.add(ovenBody);

    // Glowing stone baking slot
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x221a15,
      emissive: 0xd9531e,
      emissiveIntensity: 0.65,
      roughness: 0.8
    });
    const stoneChamber = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.35, 0.2), stoneMat);
    stoneChamber.position.set(0, 0.85, 0.6);
    ovenGroup.add(stoneChamber);

    // Brass temperature dials & handle
    const ovenHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.4, 8), brassMat);
    ovenHandle.rotation.z = Math.PI / 2;
    ovenHandle.position.set(0, 1.15, 0.68);
    ovenGroup.add(ovenHandle);

    this.group.add(ovenGroup);
    this.physics.addBox('kitchen-oven', 'Stone Pizza Deck Oven', 9.8, -12.5, 2.6, 1.4);

    this.interactions.register({
      id: 'station-oven',
      name: 'Stone Pizza Oven',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Examine Pizza Deck Oven',
      detailTitle: 'Artisanal Stone Deck Pizza Oven',
      detailDescription: 'High-temperature refractory stone hearth chamber heated to 450°C. Bakes unbaked pizzas into golden bubbly perfection.',
      category: 'kitchen',
      x: 9.8,
      z: -11.4,
      interactionRadius: 1.8,
      icon: 'box'
    });
    this.createInteractionBeacon(9.8, -11.4);

    // 3. Commercial Twin-Vat Deep Fryer (New Cooking Station)
    const fryerGroup = new THREE.Group();
    fryerGroup.position.set(12.8, 0, -12.5);

    const fryerBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.05, 1.3), stainlessMat);
    fryerBody.position.y = 0.525;
    fryerBody.castShadow = true;
    fryerGroup.add(fryerBody);

    // Oil vats
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0xd4a017,
      roughness: 0.2,
      metalness: 0.2
    });
    for (let v = -1; v <= 1; v += 2) {
      const vat = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.05, 0.8), oilMat);
      vat.position.set(v * 0.45, 1.04, 0);
      fryerGroup.add(vat);

      // Wire fry basket handle
      const basketHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.45, 8), brassMat);
      basketHandle.rotation.x = Math.PI / 4;
      basketHandle.position.set(v * 0.45, 1.25, 0.35);
      fryerGroup.add(basketHandle);
    }

    this.group.add(fryerGroup);
    this.physics.addBox('kitchen-fryer', 'Commercial Deep Fryer', 12.8, -12.5, 2.0, 1.4);

    this.interactions.register({
      id: 'station-fryer',
      name: 'Commercial Deep Fryer',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Examine Deep Fryer',
      detailTitle: 'Twin-Vat Commercial Deep Fryer',
      detailDescription: 'Precision thermostatically controlled oil fryer at 180°C. Perfect for frying seasoned battered chicken cutlets to a crunchy golden crisp.',
      category: 'kitchen',
      x: 12.8,
      z: -11.4,
      interactionRadius: 1.8,
      icon: 'flame'
    });
    this.createInteractionBeacon(12.8, -11.4);

    // 4. Dual-Basin Commercial Wash Sink
    const sinkGroup = new THREE.Group();
    sinkGroup.position.set(15.8, 0, -12.5);

    const sinkBase = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.9, 1.2), stainlessMat);
    sinkBase.position.y = 0.45;
    sinkGroup.add(sinkBase);

    // Brass commercial high-arc pre-rinse faucet
    const faucetPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.55, 8), brassMat);
    faucetPipe.position.set(0, 1.2, -0.3);
    sinkGroup.add(faucetPipe);

    const faucetSpout = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.025, 8, 12, Math.PI), brassMat);
    faucetSpout.rotation.z = Math.PI / 2;
    faucetSpout.position.set(0, 1.45, -0.15);
    sinkGroup.add(faucetSpout);

    this.group.add(sinkGroup);
    this.physics.addBox('kitchen-sink', 'Wash Sink', 15.8, -12.5, 2.0, 1.4);

    this.interactions.register({
      id: 'interact-sink',
      name: 'Kitchen Sink',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Use Kitchen Sink',
      detailTitle: 'Double Commercial Sink',
      detailDescription: 'Stainless steel wash station with brass high-pressure sprayer for sanitizing kitchenware.',
      category: 'kitchen',
      x: 15.8,
      z: -11.4,
      interactionRadius: 1.8,
      icon: 'droplet'
    });
    this.createInteractionBeacon(15.8, -11.4);

    // 5. Prep Island / Assembly Board
    const prepGroup = new THREE.Group();
    prepGroup.position.set(11.5, 0, -8.0);

    const prepTable = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.92, 1.6), stainlessMat);
    prepTable.position.y = 0.46;
    prepTable.castShadow = true;
    prepGroup.add(prepTable);

    // Thick wooden butcher block
    const butcherMat = new THREE.MeshStandardMaterial({ color: PALETTE.walnutLight, roughness: 0.6 });
    const block = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.1), butcherMat);
    block.position.set(-0.6, 0.96, 0);
    prepGroup.add(block);

    // Chef knife prop
    const knifeBlade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.35), stainlessMat);
    knifeBlade.position.set(-0.6, 1.01, 0);
    prepGroup.add(knifeBlade);

    // Metal ingredient bowls with herbs/tomatoes
    const bowlMat = new THREE.MeshStandardMaterial({ color: PALETTE.stainless, metalness: 0.9 });
    for (let b = 0; b < 3; b++) {
      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.1, 0.12, 12), bowlMat);
      bowl.position.set(0.5 + b * 0.45, 0.98, 0.2);
      prepGroup.add(bowl);
    }

    this.group.add(prepGroup);
    this.physics.addBox('kitchen-prep', 'Prep Island', 11.5, -8.0, 3.8, 1.8);

    this.interactions.register({
      id: 'station-prep',
      name: 'Prep & Assembly Board',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Examine Prep Counter',
      detailTitle: 'Prep & Recipe Assembly Station',
      detailDescription: 'Central butcher block assembly station. Combine dough, sauce, cheese & pepperoni for Pizza; bun, cooked patty, cheese & veg for Burger; dredge chicken; or assemble Artisan Sandwiches!',
      category: 'kitchen',
      x: 11.5,
      z: -6.6,
      interactionRadius: 1.8,
      icon: 'utensils'
    });
    this.createInteractionBeacon(11.5, -6.6);

    // 6. Industrial Double-Door Stainless Refrigerator (Cold Storage)
    const fridgeGroup = new THREE.Group();
    fridgeGroup.position.set(4.3, 0, -8.5);

    const fridgeBody = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 1.8), stainlessMat);
    fridgeBody.position.y = 1.2;
    fridgeBody.castShadow = true;
    fridgeGroup.add(fridgeBody);

    // Long brass handles
    for (let h = 0; h < 2; h++) {
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8), brassMat);
      handle.position.set(0.62, 1.2, -0.4 + h * 0.8);
      fridgeGroup.add(handle);
    }

    this.group.add(fridgeGroup);
    this.physics.addBox('kitchen-fridge', 'Walk-in Refrigerator', 4.3, -8.5, 1.4, 2.0);

    this.interactions.register({
      id: 'station-fridge',
      name: 'Cold Storage / Chiller',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Open Cold Storage',
      detailTitle: 'Walk-in Chiller & Cold Storage',
      detailDescription: 'Chilled food unit containing Prime Beef Patties, Fresh Chicken Cutlets, Smoked Deli Ham, Mozzarella/Cheddar Cheese, and San Marzano Tomato Sauce.',
      category: 'kitchen',
      x: 5.6,
      z: -8.5,
      interactionRadius: 1.8,
      icon: 'box'
    });
    this.createInteractionBeacon(5.6, -8.5);

    // 7. Dry Grain & Dough Pantry Shelving (Warm wood shelves)
    const pantryGroup = new THREE.Group();
    pantryGroup.position.set(16.5, 0, -8.5);

    const shelfMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.65 });
    const pantryFrame = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.4, 2.2), shelfMat);
    pantryFrame.position.y = 1.2;
    pantryFrame.castShadow = true;
    pantryGroup.add(pantryFrame);

    // Flour sacks and dough containers on shelves
    const sackMat = new THREE.MeshStandardMaterial({ color: 0xedd6b4, roughness: 0.9 });
    for (let s = 0; s < 3; s++) {
      const sack = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 0.35), sackMat);
      sack.position.set(0, 0.75 + s * 0.5, -0.5 + s * 0.45);
      pantryGroup.add(sack);
    }

    this.group.add(pantryGroup);
    this.physics.addBox('kitchen-pantry', 'Dry Pantry', 16.5, -8.5, 1.2, 2.4);

    this.interactions.register({
      id: 'station-pantry',
      name: 'Dry Grain & Dough Pantry',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Open Dry Pantry',
      detailTitle: 'Dry Grain & Bakery Pantry',
      detailDescription: 'Stocks Artisan Pizza Dough, Brioche Burger Buns, Country Sliced Bread, Fresh Fettuccine, Dredging Flour, and Pepperoni.',
      category: 'kitchen',
      x: 15.2,
      z: -8.5,
      interactionRadius: 1.8,
      icon: 'box'
    });
    this.createInteractionBeacon(15.2, -8.5);

    // 8. Fresh Produce Crate Station (Warm wood crate)
    const produceGroup = new THREE.Group();
    produceGroup.position.set(16.5, 0, -5.5);

    const crateWoodMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWood, roughness: 0.75 });
    const crate = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.9, 1.4), crateWoodMat);
    crate.position.y = 0.45;
    crate.castShadow = true;
    produceGroup.add(crate);

    // Green lettuce and red tomato props inside crate
    const lettuceMat = new THREE.MeshStandardMaterial({ color: 0x48c774, roughness: 0.7 });
    const tomatoMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.4 });
    const veg1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), lettuceMat);
    veg1.position.set(0, 0.95, -0.3);
    const veg2 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), tomatoMat);
    veg2.position.set(0, 0.94, 0.25);
    produceGroup.add(veg1, veg2);

    this.group.add(produceGroup);
    this.physics.addBox('kitchen-produce', 'Produce Crate', 16.5, -5.5, 1.2, 1.6);

    this.interactions.register({
      id: 'station-produce',
      name: 'Fresh Farm Produce Bin',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Pick Fresh Produce',
      detailTitle: 'Fresh Produce Harvest Crate',
      detailDescription: 'Crisp organic romaine lettuce heads and ripe vine heirloom tomatoes.',
      category: 'kitchen',
      x: 15.2,
      z: -5.5,
      interactionRadius: 1.8,
      icon: 'utensils'
    });
    this.createInteractionBeacon(15.2, -5.5);

    // 9. Kitchen Waste Disposal Trash Bin (New Disposal Station)
    const trashGroup = new THREE.Group();
    trashGroup.position.set(4.3, 0, -5.0);

    const trashBinMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.28, 0.9, 14), stainlessMat);
    trashBinMesh.position.y = 0.45;
    trashBinMesh.castShadow = true;
    trashGroup.add(trashBinMesh);

    // Black foot pedal and lid
    const lidMat = new THREE.MeshStandardMaterial({ color: 0x222428, roughness: 0.5 });
    const trashLid = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 14), lidMat);
    trashLid.position.y = 0.92;
    trashGroup.add(trashLid);

    this.group.add(trashGroup);
    this.physics.addBox('kitchen-trash', 'Kitchen Trash Bin', 4.3, -5.0, 0.9, 0.9);

    this.interactions.register({
      id: 'station-trash',
      name: 'Kitchen Waste Disposal',
      zone: ZONES.KITCHEN.name,
      actionLabel: 'Use Kitchen Waste Bin',
      detailTitle: 'Sanitary Kitchen Disposal Bin',
      detailDescription: 'Step-pedal waste receptacle for throwing away ruined/burnt food or clearing unwanted ingredients.',
      category: 'kitchen',
      x: 5.4,
      z: -5.0,
      interactionRadius: 1.8,
      icon: 'trash'
    });
    this.createInteractionBeacon(5.4, -5.0);
  }

  // =========================================================================
  // 4. PAYMENT & TAKEAWAY COUNTER ZONE
  // =========================================================================
  private buildCounterZone() {
    const counterBodyMat = new THREE.MeshStandardMaterial({
      color: PALETTE.warmWoodDark,
      roughness: 0.6
    });
    const marbleCounterMat = new THREE.MeshStandardMaterial({
      color: PALETTE.cream,
      roughness: 0.3,
      metalness: 0.05
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.75,
      roughness: 0.25
    });

    const counterGroup = new THREE.Group();
    counterGroup.position.set(10.0, 0, 1.5);

    // Friendly soft coral runner rug with mint/gold border around the counter area
    const carpetGroup = new THREE.Group();
    carpetGroup.position.set(10.0, 0, 2.2);

    const carpetWidth = 9.8;
    const carpetDepth = 4.2;
    const carpetMat = new THREE.MeshStandardMaterial({
      color: PALETTE.coral,
      roughness: 0.85,
      metalness: 0.02
    });
    const carpetMesh = new THREE.Mesh(new THREE.PlaneGeometry(carpetWidth, carpetDepth), carpetMat);
    carpetMesh.rotation.x = -Math.PI / 2;
    carpetMesh.position.y = 0.004;
    carpetMesh.receiveShadow = true;
    carpetGroup.add(carpetMesh);

    // Subtle mint border around the carpet
    const borderMat = new THREE.MeshStandardMaterial({
      color: PALETTE.mint,
      roughness: 0.5
    });
    const bThickness = 0.08;
    // North border
    const bNorth = new THREE.Mesh(new THREE.BoxGeometry(carpetWidth, 0.008, bThickness), borderMat);
    bNorth.position.set(0, 0.005, -carpetDepth / 2);
    // South border
    const bSouth = new THREE.Mesh(new THREE.BoxGeometry(carpetWidth, 0.008, bThickness), borderMat);
    bSouth.position.set(0, 0.005, carpetDepth / 2);
    // West border
    const bWest = new THREE.Mesh(new THREE.BoxGeometry(bThickness, 0.008, carpetDepth), borderMat);
    bWest.position.set(-carpetWidth / 2, 0.005, 0);
    // East border
    const bEast = new THREE.Mesh(new THREE.BoxGeometry(bThickness, 0.008, carpetDepth), borderMat);
    bEast.position.set(carpetWidth / 2, 0.005, 0);

    carpetGroup.add(bNorth, bSouth, bWest, bEast);
    this.group.add(carpetGroup);

    // Main warm wood counter body
    const counterBody = new THREE.Mesh(new THREE.BoxGeometry(8.0, 1.0, 1.2), counterBodyMat);
    counterBody.position.y = 0.5;
    counterBody.castShadow = true;
    counterGroup.add(counterBody);

    // Clean cream surface top
    const counterTop = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.08, 1.3), marbleCounterMat);
    counterTop.position.y = 1.04;
    counterGroup.add(counterTop);

    // Mint green decorative accent kickplate
    const kickMat = new THREE.MeshStandardMaterial({ color: PALETTE.mint, roughness: 0.5 });
    const kickPlate = new THREE.Mesh(new THREE.BoxGeometry(8.1, 0.12, 1.25), kickMat);
    kickPlate.position.y = 0.06;
    counterGroup.add(kickPlate);

    // 1. POS Terminal (Cash Register)
    const posMat = new THREE.MeshStandardMaterial({ color: 0x1f2327, roughness: 0.3 });
    const posStand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.22, 10), brassMat);
    posStand.position.set(-1.8, 1.15, 0.1);
    counterGroup.add(posStand);

    const posScreen = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.24, 0.04), posMat);
    posScreen.rotation.x = -Math.PI / 6;
    posScreen.position.set(-1.8, 1.3, 0.05);
    counterGroup.add(posScreen);

    // 2. Brass Service Bell
    const bellBase = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.04, 12), brassMat);
    bellBase.position.set(-0.8, 1.1, 0.2);
    const bellDome = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), brassMat);
    bellDome.position.set(-0.8, 1.12, 0.2);
    counterGroup.add(bellBase, bellDome);

    // 3. Pastry / Bakery Vitrine Case
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1.0,
      transparent: true,
      roughness: 0.1,
      ior: 1.5
    });
    const caseFrame = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.65, 0.8), glassMat);
    caseFrame.position.set(1.5, 1.4, 0);
    counterGroup.add(caseFrame);

    const caseTrim = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.04, 0.84), brassMat);
    caseTrim.position.set(1.5, 1.73, 0);
    counterGroup.add(caseTrim);

    // 4. Takeaway Shelving behind Counter
    const shelfGroup = new THREE.Group();
    shelfGroup.position.set(14.0, 0, 5.0);
    const shelfWood = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.4, 3.2), counterBodyMat);
    shelfWood.position.y = 1.2;
    shelfWood.castShadow = true;
    shelfGroup.add(shelfWood);

    // Kraft paper takeaway bags on shelves
    const bagMat = new THREE.MeshStandardMaterial({ color: 0xc8ad7f, roughness: 0.8 });
    for (let bg = 0; bg < 3; bg++) {
      const bag = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.38, 0.25), bagMat);
      bag.position.set(0, 1.45, -0.8 + bg * 0.8);
      shelfGroup.add(bag);
    }
    this.group.add(shelfGroup);
    this.physics.addBox('counter-shelf', 'Takeaway Racks', 14.0, 5.0, 1.2, 3.4);

    this.group.add(counterGroup);
    this.physics.addBox('main-counter', 'Service Counter', 10.0, 1.5, 8.2, 1.4);

    // Interactions
    this.interactions.register({
      id: 'interact-pos',
      name: 'POS Terminal',
      zone: ZONES.COUNTER.name,
      actionLabel: 'Examine POS Register',
      detailTitle: 'Bistro POS & Payment Terminal',
      detailDescription: 'Digital order management system. In Phase 2, this will tally patron checks, manage payment processing, and trigger order queues.',
      category: 'counter',
      x: 8.2,
      z: 2.5,
      interactionRadius: 1.8,
      icon: 'terminal'
    });
    this.createInteractionBeacon(8.2, 2.5);

    this.interactions.register({
      id: 'interact-bell',
      name: 'Order Bell',
      zone: ZONES.COUNTER.name,
      actionLabel: 'Ring Service Bell',
      detailTitle: 'Brass Call Bell',
      detailDescription: 'Polished solid brass bell. Pressing E will ring the bell with a crisp chime to signal front-of-house staff.',
      category: 'counter',
      x: 9.2,
      z: 2.5,
      interactionRadius: 1.8,
      icon: 'bell'
    });
    this.createInteractionBeacon(9.2, 2.5);

    this.interactions.register({
      id: 'interact-takeaway',
      name: 'Takeaway Counter',
      zone: ZONES.COUNTER.name,
      actionLabel: 'Check Takeaway Orders',
      detailTitle: 'Express Takeaway Station',
      detailDescription: 'Dedicated takeaway order holding shelves with insulated packaging and guest order tickets.',
      category: 'counter',
      x: 12.5,
      z: 5.0,
      interactionRadius: 1.8,
      icon: 'box'
    });
    this.createInteractionBeacon(12.5, 5.0);
  }

  // =========================================================================
  // 5. DINING ROOM ZONE: Warm Wood Tables, Cosy Coral & Mint Seating
  // =========================================================================
  private buildDiningZone() {
    const tableWoodMat = new THREE.MeshStandardMaterial({
      color: PALETTE.warmWood,
      roughness: 0.45
    });
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: PALETTE.warmWoodDark,
      roughness: 0.6
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.75,
      roughness: 0.25
    });
    const coralChairMat = new THREE.MeshStandardMaterial({
      color: PALETTE.coral,
      roughness: 0.65,
      metalness: 0.05
    });
    const mintChairMat = new THREE.MeshStandardMaterial({
      color: PALETTE.mint,
      roughness: 0.65,
      metalness: 0.05
    });

    // Helper: Build a round dining table with 4 comfortable chairs
    const createDiningTableSet = (
      id: string,
      tableName: string,
      x: number,
      z: number,
      interactable: boolean = false,
      useMint: boolean = false
    ) => {
      const tableGroup = new THREE.Group();
      tableGroup.position.set(x, 0, z);

      // Warm pedestal
      const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.4, 0.76, 16), pedestalMat);
      pedestal.position.y = 0.38;
      tableGroup.add(pedestal);

      // Warm honey oak top
      const tableTop = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.08, 24), tableWoodMat);
      tableTop.position.y = 0.78;
      tableTop.castShadow = true;
      tableGroup.add(tableTop);

      // Center ceramic vase with mint/yellow flower
      const vaseMat = new THREE.MeshStandardMaterial({ color: PALETTE.cream, roughness: 0.3 });
      const vase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.2, 12), vaseMat);
      vase.position.y = 0.9;
      tableGroup.add(vase);

      const flowerMat = new THREE.MeshStandardMaterial({ color: PALETTE.softYellow, roughness: 0.4 });
      const flower = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), flowerMat);
      flower.position.y = 1.04;
      tableGroup.add(flower);

      // 4 cosy chairs surrounding table (alternating coral & mint)
      const seatMat = useMint ? mintChairMat : coralChairMat;
      const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
      angles.forEach((angle) => {
        const chairGroup = new THREE.Group();
        const dist = 1.45;
        chairGroup.position.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist);
        chairGroup.rotation.y = -angle - Math.PI / 2;

        // Legs (warm wood)
        const legMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.7 });
        for (let lx = -1; lx <= 1; lx += 2) {
          for (let lz = -1; lz <= 1; lz += 2) {
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.025, 0.45, 8), legMat);
            leg.position.set(lx * 0.18, 0.225, lz * 0.18);
            chairGroup.add(leg);
          }
        }

        // Cosy seat cushion
        const seat = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.1, 0.46), seatMat);
        seat.position.y = 0.48;
        seat.castShadow = true;
        chairGroup.add(seat);

        // Curved comfortable backrest
        const back = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.45, 0.08), seatMat);
        back.position.set(0, 0.72, -0.2);
        chairGroup.add(back);

        tableGroup.add(chairGroup);
      });

      // Warm pendant chandelier directly above table
      const chandelierGroup = new THREE.Group();
      chandelierGroup.position.set(x, 2.7, z);

      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.9, 6), brassMat);
      cord.position.y = 0.45;
      chandelierGroup.add(cord);

      // Warm cream cone shade with gold rim
      const shadeMat = new THREE.MeshStandardMaterial({ color: PALETTE.cream, roughness: 0.5 });
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.25, 16, 1, true), shadeMat);
      shade.rotation.x = Math.PI;
      chandelierGroup.add(shade);

      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 10, 8),
        new THREE.MeshBasicMaterial({ color: PALETTE.warmLight })
      );
      bulb.position.y = -0.05;
      chandelierGroup.add(bulb);

      this.group.add(tableGroup);
      this.group.add(chandelierGroup);
      this.physics.addBox(id, tableName, x, z, 3.2, 3.2);

      if (interactable) {
        this.interactions.register({
          id: `interact-${id}`,
          name: tableName,
          zone: ZONES.DINING.name,
          actionLabel: `Inspect ${tableName}`,
          detailTitle: `${tableName} (4-Seater)`,
          detailDescription: 'Handcrafted walnut dining table with deep burgundy velvet armchairs and warm overhead brass lighting.',
          category: 'dining',
          x: x,
          z: z + 1.8,
          interactionRadius: 1.8,
          icon: 'utensils'
        });
        this.createInteractionBeacon(x, z + 1.8);
      }
    };

    // Table 1 (Center-North of Dining - Coral)
    createDiningTableSet('dining-table-1', 'Dining Table 1', -6.0, 0.5, true, false);

    // Table 2 (Center-South of Dining - Mint)
    createDiningTableSet('dining-table-2', 'Dining Table 2', -6.0, 7.5, true, true);

    // Table 3 (East Dining by walkway - Coral)
    createDiningTableSet('dining-table-3', 'Dining Table 3', 0.5, 7.5, true, false);

    // VIP Booth Seating along the West Wall (-15.5)
    const buildBooth = (id: string, z: number, useMint: boolean = false) => {
      const boothGroup = new THREE.Group();
      boothGroup.position.set(-14.2, 0, z);

      // Warm wood booth frame
      const frameMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.65 });
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2.6), frameMat);
      frame.position.set(-0.2, 0.7, 0);
      boothGroup.add(frame);

      // Comfortable Coral or Mint Cushion & Back
      const cushionMat = useMint ? mintChairMat : coralChairMat;
      const bench = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.45, 2.4), cushionMat);
      bench.position.set(0.15, 0.42, 0);
      boothGroup.add(bench);

      const backrest = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 2.4), cushionMat);
      backrest.position.set(-0.4, 0.95, 0);
      boothGroup.add(backrest);

      // Central warm honey wood booth table
      const boothTable = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.76, 1.6), tableWoodMat);
      boothTable.position.set(0.9, 0.38, 0);
      boothGroup.add(boothTable);

      const creamRunner = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.78, 1.62),
        new THREE.MeshStandardMaterial({ color: PALETTE.cream, roughness: 0.5 })
      );
      creamRunner.position.set(0.9, 0.39, 0);
      boothGroup.add(creamRunner);

      // Small flower vase on booth table
      const bVase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.05, 0.15, 10),
        new THREE.MeshStandardMaterial({ color: PALETTE.softYellow, roughness: 0.4 })
      );
      bVase.position.set(0.9, 0.86, 0);
      boothGroup.add(bVase);

      this.group.add(boothGroup);
      this.physics.addBox(id, 'Cosy Booth', -13.5, z, 2.8, 2.8);

      this.interactions.register({
        id: `interact-${id}`,
        name: 'Cosy Booth',
        zone: ZONES.DINING.name,
        actionLabel: 'Examine Booth',
        detailTitle: 'Cosy Dining Booth',
        detailDescription: 'Comfortable private booth seating with soft cushions, warm honey wood, and fresh table accents.',
        category: 'dining',
        x: -11.5,
        z: z,
        interactionRadius: 1.8,
        icon: 'utensils'
      });
      this.createInteractionBeacon(-11.5, z);
    };

    buildBooth('booth-1', 1.0, false); // Coral booth
    buildBooth('booth-2', 7.5, true);  // Mint booth

    // Host & Reservations Podium near South-West entrance
    const hostPodiumGroup = new THREE.Group();
    hostPodiumGroup.position.set(-3.5, 0, 11.5);

    const podiumWoodMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.6 });
    const podiumMesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.15, 0.6), podiumWoodMat);
    podiumMesh.position.y = 0.575;
    hostPodiumGroup.add(podiumMesh);

    const podiumTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 0.04, 0.64),
      new THREE.MeshStandardMaterial({ color: PALETTE.softYellowDark, roughness: 0.4 })
    );
    podiumTrim.position.y = 1.16;
    hostPodiumGroup.add(podiumTrim);

    // Guest directory book
    const bookMat = new THREE.MeshStandardMaterial({ color: PALETTE.coralDark, roughness: 0.7 });
    const bookMesh = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.05, 0.28), bookMat);
    bookMesh.position.set(0, 1.2, 0);
    bookMesh.rotation.y = 0.15;
    hostPodiumGroup.add(bookMesh);

    this.group.add(hostPodiumGroup);
    this.physics.addBox('host-podium', 'Host Podium', -3.5, 11.5, 0.9, 0.8);

    this.interactions.register({
      id: 'interact-host-podium',
      name: 'Host Podium',
      zone: ZONES.DINING.name,
      actionLabel: 'Check Reservations',
      detailTitle: "Maître D' Reception Podium",
      detailDescription: 'Reception stand with leather-bound guest directory and dining reservations. Welcomes patrons into the restaurant.',
      category: 'dining',
      x: -3.5,
      z: 10.2,
      interactionRadius: 1.8,
      icon: 'bookmark'
    });
    this.createInteractionBeacon(-3.5, 10.2);
  }

  // =========================================================================
  // 6. RESTROOM ZONE: Porcelain Vanity, Mirror, Brass Taps & Stalls
  // =========================================================================
  private buildRestroomZone() {
    const vanityBaseMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.6 });
    const stallWoodMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWood, roughness: 0.65 });
    const porcelainMat = new THREE.MeshStandardMaterial({
      color: 0xfdfdfd,
      roughness: 0.15,
      metalness: 0.05
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: PALETTE.brass,
      metalness: 0.75,
      roughness: 0.25
    });

    const restroomGroup = new THREE.Group();
    restroomGroup.position.set(-11.5, 0, -8.5);

    // 1. Double Porcelain Vanity & Mirror along North wall (-11.5, Z = -12.8)
    const vanityGroup = new THREE.Group();
    vanityGroup.position.set(0, 0, -3.8);

    const vanityBase = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.85, 1.1), vanityBaseMat);
    vanityBase.position.y = 0.425;
    vanityGroup.add(vanityBase);

    // Cream surface top
    const vanityTop = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 0.08, 1.2),
      new THREE.MeshStandardMaterial({ color: PALETTE.cream, roughness: 0.25 })
    );
    vanityTop.position.y = 0.88;
    vanityGroup.add(vanityTop);

    // Two porcelain vessel sinks with brass faucets
    for (let s = -1; s <= 1; s += 2) {
      const sink = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.32, 0.2, 16), porcelainMat);
      sink.position.set(s * 0.9, 0.98, 0);
      vanityGroup.add(sink);

      const tap = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 8), brassMat);
      tap.position.set(s * 0.9, 1.25, -0.3);
      vanityGroup.add(tap);
    }

    // Elegant Framed Wall Mirror with Mint frame
    const mirrorMat = new THREE.MeshStandardMaterial({
      color: 0xd6eaee,
      metalness: 0.9,
      roughness: 0.05
    });
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(3.0, 1.2, 0.06), mirrorMat);
    mirror.position.set(0, 1.85, -0.55);
    vanityGroup.add(mirror);

    const mirrorFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3.1, 1.3, 0.04),
      new THREE.MeshStandardMaterial({ color: PALETTE.mint, roughness: 0.5 })
    );
    mirrorFrame.position.set(0, 1.85, -0.56);
    vanityGroup.add(mirrorFrame);

    restroomGroup.add(vanityGroup);
    this.physics.addBox('restroom-vanity', 'Restroom Vanity', -11.5, -12.3, 3.6, 1.4);

    this.interactions.register({
      id: 'interact-restroom-vanity',
      name: 'Vanity & Sink',
      zone: ZONES.RESTROOM.name,
      actionLabel: 'Use Restroom Sink',
      detailTitle: 'Porcelain Vanity & Wash Station',
      detailDescription: 'Clean cream wash counter equipped with dual vessel porcelain sinks, brass gooseneck taps, and full-length mirror.',
      category: 'restroom',
      x: -11.5,
      z: -11.2,
      interactionRadius: 1.8,
      icon: 'droplet'
    });
    this.createInteractionBeacon(-11.5, -11.2);

    // 2. Warm Wood Privacy Restroom Stalls along West Wall
    const stallGroup = new THREE.Group();
    stallGroup.position.set(-3.5, 0, 0);

    const stallDivider = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.2, 2.6), stallWoodMat);
    stallDivider.position.set(0, 1.1, 0);
    stallGroup.add(stallDivider);

    const stallDoor = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.0, 0.08), stallWoodMat);
    stallDoor.position.set(0.9, 1.1, 1.3);
    stallGroup.add(stallDoor);

    const stallHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.16, 8), brassMat);
    stallHandle.position.set(1.5, 1.1, 1.36);
    stallGroup.add(stallHandle);

    // Porcelain toilet fixture inside stall
    const toiletBase = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.65), porcelainMat);
    toiletBase.position.set(0.85, 0.225, -0.3);
    stallGroup.add(toiletBase);

    const toiletTank = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.3), porcelainMat);
    toiletTank.position.set(0.85, 0.65, -0.55);
    stallGroup.add(toiletTank);

    restroomGroup.add(stallGroup);
    this.physics.addBox('restroom-stall', 'Restroom Stall', -15.0, -8.5, 2.8, 3.0);

    this.interactions.register({
      id: 'interact-restroom-stall',
      name: 'Privacy Stall',
      zone: ZONES.RESTROOM.name,
      actionLabel: 'Check Restroom Stall',
      detailTitle: 'Private Restroom Cabin',
      detailDescription: 'Spotless private guest facility featuring warm wood partition and privacy latch.',
      category: 'restroom',
      x: -13.2,
      z: -6.5,
      interactionRadius: 1.8,
      icon: 'box'
    });
    this.createInteractionBeacon(-13.2, -6.5);

    this.group.add(restroomGroup);
  }

  // =========================================================================
  // 7. DECORATIVE GREENERY, SCONCES & INTERACTIVE BEACONS
  // =========================================================================
  private buildAtmosphericProps() {
    const woodMat = new THREE.MeshStandardMaterial({ color: PALETTE.warmWoodDark, roughness: 0.7 });
    const brassMat = new THREE.MeshStandardMaterial({ color: PALETTE.brass, metalness: 0.75, roughness: 0.25 });

    // Helper: Cosy Potted Plant / Monstera / Fig with Ceramic Pot
    const createPlant = (x: number, z: number, potColor: number = PALETTE.creamDark) => {
      const plantGroup = new THREE.Group();
      plantGroup.position.set(x, 0, z);

      // Ceramic planter
      const potMat = new THREE.MeshStandardMaterial({ color: potColor, roughness: 0.5 });
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.28, 0.7, 14), potMat);
      pot.position.y = 0.35;
      pot.castShadow = true;
      plantGroup.add(pot);

      // Warm rim accent
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.39, 0.02, 8, 16), brassMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.62;
      plantGroup.add(ring);

      // Fresh green foliage
      const leafMat = new THREE.MeshStandardMaterial({ color: PALETTE.plantGreen, roughness: 0.6 });
      const trunkMat = new THREE.MeshStandardMaterial({ color: PALETTE.plantStem, roughness: 0.85 });
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.85, 8), trunkMat);
      trunk.position.y = 0.85;
      plantGroup.add(trunk);

      // Foliage spheres
      const foliage1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), leafMat);
      foliage1.position.set(0, 1.4, 0);
      foliage1.castShadow = true;
      plantGroup.add(foliage1);

      const foliage2 = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 8), leafMat);
      foliage2.position.set(0.18, 1.7, 0.1);
      foliage2.castShadow = true;
      plantGroup.add(foliage2);

      this.group.add(plantGroup);
      this.physics.addBox(`plant-${x}-${z}`, 'Potted Plant', x, z, 0.9, 0.9);
    };

    // Helper: Framed Wall Painting with warm illumination
    const createFramedPainting = (
      x: number,
      y: number,
      z: number,
      w: number,
      h: number,
      rotY: number,
      primaryColor: number,
      accentColor: number
    ) => {
      const artGroup = new THREE.Group();
      artGroup.position.set(x, y, z);
      artGroup.rotation.y = rotY;

      // Outer warm wood frame
      const frameThickness = 0.06;
      const frameMesh = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, frameThickness),
        woodMat
      );
      artGroup.add(frameMesh);

      // Inner cream mat border
      const bezelMesh = new THREE.Mesh(
        new THREE.BoxGeometry(w - 0.12, h - 0.12, frameThickness + 0.01),
        new THREE.MeshStandardMaterial({ color: PALETTE.cream, roughness: 0.6 })
      );
      artGroup.add(bezelMesh);

      // Canvas background
      const canvasMat = new THREE.MeshStandardMaterial({
        color: primaryColor,
        roughness: 0.65
      });
      const canvasMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(w - 0.26, h - 0.26),
        canvasMat
      );
      canvasMesh.position.z = frameThickness / 2 + 0.008;
      artGroup.add(canvasMesh);

      // Cheerful abstract circle / landscape accent
      const accentMat = new THREE.MeshStandardMaterial({
        color: accentColor,
        roughness: 0.5
      });
      const artShape = new THREE.Mesh(
        new THREE.CircleGeometry((h - 0.35) / 2.8, 20),
        accentMat
      );
      artShape.position.set((w - 0.3) * 0.18, 0, frameThickness / 2 + 0.01);
      artGroup.add(artShape);

      // Picture light fixture above frame
      const lightBar = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.45, 0.04, 0.08),
        brassMat
      );
      lightBar.position.set(0, h / 2 + 0.12, 0.14);
      artGroup.add(lightBar);

      const lightArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.015, 0.14, 8),
        brassMat
      );
      lightArm.rotation.x = Math.PI / 4;
      lightArm.position.set(0, h / 2 + 0.06, 0.07);
      artGroup.add(lightArm);

      this.group.add(artGroup);
    };

    // Helper: Warm Wall Sconce
    const createWallSconce = (x: number, y: number, z: number, rotY: number) => {
      const sconceGroup = new THREE.Group();
      sconceGroup.position.set(x, y, z);
      sconceGroup.rotation.y = rotY;

      // Brass wall backplate
      const backplate = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.03, 12), brassMat);
      backplate.rotation.x = Math.PI / 2;
      sconceGroup.add(backplate);

      // Gooseneck arm
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.22, 8), brassMat);
      arm.rotation.x = Math.PI / 3;
      arm.position.set(0, 0.05, 0.1);
      sconceGroup.add(arm);

      // Frosted glowing glass shade
      const shadeMat = new THREE.MeshStandardMaterial({
        color: 0xfff8e8,
        emissive: 0xffe8bd,
        emissiveIntensity: 0.6,
        roughness: 0.25
      });
      const shade = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 12), shadeMat);
      shade.position.set(0, 0.12, 0.19);
      sconceGroup.add(shade);

      // Warm localized point light
      const warmLight = new THREE.PointLight(PALETTE.warmLight, 0.5, 6.0, 1.5);
      warmLight.position.set(0, 0.12, 0.22);
      sconceGroup.add(warmLight);

      this.group.add(sconceGroup);
    };

    // 1. SPACE BETWEEN KITCHEN & RESTROOM (North Corridor Wall):
    // Cheerful framed botanical painting on the wall
    createFramedPainting(-1.65, 2.0, -13.15, 3.8, 2.0, 0, PALETTE.creamDark, PALETTE.coral);
    // Potted plant on each side flanking the painting (kept tucked against wall)
    createPlant(-4.4, -12.4, PALETTE.mint);
    createPlant(1.1, -12.4, PALETTE.softYellow);
    // Warm wall sconces flanking the large painting
    createWallSconce(-3.9, 2.3, -13.15, 0);
    createWallSconce(0.6, 2.3, -13.15, 0);

    // 2. DINING HALL DECORATIONS:
    // Framed paintings along the West wall above VIP booths
    createFramedPainting(-16.15, 2.0, 1.0, 2.4, 1.4, Math.PI / 2, PALETTE.coral, PALETTE.softYellow);
    createFramedPainting(-16.15, 2.0, 7.5, 2.4, 1.4, Math.PI / 2, PALETTE.mint, PALETTE.cream);
    // Warm wall lights along West wall
    createWallSconce(-16.15, 2.35, 4.25, Math.PI / 2);
    createWallSconce(-16.15, 2.35, 11.0, Math.PI / 2);

    // 3. COUNTER & ENTRANCE DECORATIONS:
    // Framed painting along the East wall near counter
    createFramedPainting(17.15, 2.0, 6.5, 2.4, 1.4, -Math.PI / 2, PALETTE.softYellow, PALETTE.coral);
    // Warm wall light along East wall
    createWallSconce(17.15, 2.35, 2.2, -Math.PI / 2);

    // 4. TASTEFUL CORNER PLANTS (All completely out of movement corridors):
    createPlant(-15.5, 12.0, PALETTE.coral); // Dining front-left corner
    createPlant(16.5, 12.0, PALETTE.mint);   // Counter front-right corner
    createPlant(-6.2, 12.0, PALETTE.cream);  // Left side of entrance doorway
    createPlant(16.5, -2.8, PALETTE.softYellow); // East wall nook by counter
  }

  // Interactive floor beacon ring that pulses to highlight points of interest
  private createInteractionBeacon(x: number, z: number) {
    const beaconGeo = new THREE.RingGeometry(0.35, 0.45, 24);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: PALETTE.brass,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.rotation.x = -Math.PI / 2;
    beacon.position.set(x, 0.015, z);
    this.group.add(beacon);
    this.interactiveMarkers.push(beacon);
  }

  public updateAnimation(time: number) {
    // Pulse interactive beacons subtly
    const scale = 1.0 + Math.sin(time * 3.5) * 0.12;
    const opacity = 0.45 + Math.sin(time * 3.5) * 0.25;
    for (let i = 0; i < this.interactiveMarkers.length; i++) {
      this.interactiveMarkers[i].scale.set(scale, scale, 1);
      (this.interactiveMarkers[i].material as THREE.MeshBasicMaterial).opacity = opacity;
    }
  }
}
