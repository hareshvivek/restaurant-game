export interface Point2D {
  x: number;
  z: number;
}

export const RESTAURANT_ENTRANCE: Point2D = { x: -5.5, z: 13.0 };
export const RESTAURANT_DOOR_INSIDE: Point2D = { x: -5.5, z: 10.8 };

// Primary clear intersection corridors
const SPINE_SOUTH: Point2D = { x: -3.5, z: 10.2 };
const SPINE_MID: Point2D = { x: -3.5, z: 5.0 };
const SPINE_NORTH: Point2D = { x: -3.5, z: 0.8 };

export const DINING_TABLE_CONFIGS = [
  {
    id: 'dining-table-1',
    interactionId: 'interact-dining-table-1',
    name: 'Dining Table 1',
    tableCenter: { x: -6.0, z: 0.5 },
    seatPosition: { x: -6.0, z: 2.1 }, // South chair facing North towards table
    seatRotationY: Math.PI,
    isBooth: false,
    pathWaypoints: [
      RESTAURANT_DOOR_INSIDE,
      SPINE_SOUTH,
      SPINE_NORTH,
      { x: -6.0, z: 2.1 }
    ]
  },
  {
    id: 'dining-table-2',
    interactionId: 'interact-dining-table-2',
    name: 'Dining Table 2',
    tableCenter: { x: -6.0, z: 7.5 },
    seatPosition: { x: -6.0, z: 9.1 }, // South chair facing North
    seatRotationY: Math.PI,
    isBooth: false,
    pathWaypoints: [
      RESTAURANT_DOOR_INSIDE,
      SPINE_SOUTH,
      { x: -6.0, z: 10.2 },
      { x: -6.0, z: 9.1 }
    ]
  },
  {
    id: 'dining-table-3',
    interactionId: 'interact-dining-table-3',
    name: 'Dining Table 3',
    tableCenter: { x: 0.5, z: 7.5 },
    seatPosition: { x: 0.5, z: 9.1 }, // South chair facing North
    seatRotationY: Math.PI,
    isBooth: false,
    pathWaypoints: [
      RESTAURANT_DOOR_INSIDE,
      SPINE_SOUTH,
      { x: 0.5, z: 10.2 },
      { x: 0.5, z: 9.1 }
    ]
  },
  {
    id: 'booth-1',
    interactionId: 'interact-booth-1',
    name: 'VIP Velvet Booth 1',
    tableCenter: { x: -14.2, z: 1.0 },
    seatPosition: { x: -13.0, z: 1.0 }, // Velvet bench facing East
    seatRotationY: Math.PI / 2,
    isBooth: true,
    pathWaypoints: [
      RESTAURANT_DOOR_INSIDE,
      SPINE_SOUTH,
      SPINE_NORTH,
      { x: -10.5, z: 0.8 },
      { x: -13.0, z: 1.0 }
    ]
  },
  {
    id: 'booth-2',
    interactionId: 'interact-booth-2',
    name: 'VIP Velvet Booth 2',
    tableCenter: { x: -14.2, z: 7.5 },
    seatPosition: { x: -13.0, z: 7.5 }, // Velvet bench facing East
    seatRotationY: Math.PI / 2,
    isBooth: true,
    pathWaypoints: [
      RESTAURANT_DOOR_INSIDE,
      SPINE_SOUTH,
      { x: -10.5, z: 10.2 },
      { x: -13.0, z: 7.5 }
    ]
  }
];

export const TAKEAWAY_COUNTER_CONFIG = {
  id: 'counter-takeaway',
  interactionId: 'interact-pos',
  name: 'Takeaway Service Counter',
  waitingPosition: { x: 8.2, z: 3.2 },
  waitingRotationY: Math.PI, // Facing North towards POS terminal
  pathWaypoints: [
    RESTAURANT_DOOR_INSIDE,
    SPINE_SOUTH,
    { x: 3.0, z: 10.2 },
    { x: 8.2, z: 7.5 },
    { x: 8.2, z: 3.2 }
  ]
};

// Generates an exit path by reversing the waypoints and ending at entrance
export function getExitPath(waypoints: Point2D[]): Point2D[] {
  const reversed = [...waypoints].reverse();
  return [...reversed, RESTAURANT_ENTRANCE];
}
