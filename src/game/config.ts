export const PALETTE = {
  // Fresh, friendly bistro palette (warm wood, cream surfaces, coral, mint, soft yellow)
  warmWood: 0xc89255,        // Warm honey/oak wooden floor
  warmWoodLight: 0xd9a86e,   // Light golden oak grain
  warmWoodDark: 0x8a5a2e,    // Warm amber chestnut furniture & accents
  
  cream: 0xfdfbf7,           // Soft airy warm cream for walls & surfaces
  creamDark: 0xf2ece1,       // Oat cream for tiles & trim
  creamBorder: 0xe2d6c3,     // Light border tone

  coral: 0xf27d6d,           // Cheerful cosy coral accent
  coralDark: 0xd86253,       // Deep coral for cushions & carpets
  coralLight: 0xf99c8f,      // Soft pastel coral

  mint: 0x76c29e,            // Fresh relaxing mint green
  mintDark: 0x58a481,        // Sage / deep mint
  mintLight: 0x9ee0c2,       // Soft pale mint

  softYellow: 0xf9df74,      // Warm friendly butter yellow
  softYellowDark: 0xe5c754,  // Honey mustard accent
  softYellowLight: 0xfbf1a9, // Soft lemon tint

  brass: 0xe0b95b,           // Warm golden brass hardware
  brassLight: 0xf5d687,
  brassDark: 0xb88e36,

  stainless: 0xd5dade,       // Kitchen appliances
  stainlessDark: 0x939ba2,
  tileGrout: 0xd8d1c5,
  charcoal: 0x3d3f44,

  plantGreen: 0x4f9660,      // Lush leaf green
  plantStem: 0x593d25,       // Warm earth planter trunk

  warmLight: 0xfff3db,       // Cosy warm golden illumination
  ambientLight: 0xfef7ea,    // Soft sun-filled ambient light

  // Backwards compatibility aliases mapped to new cosy warm tones
  walnut: 0x8a5a2e,
  walnutDark: 0x6e431f,
  walnutLight: 0xb07d4b,
  burgundy: 0xf27d6d,
  burgundyDark: 0xd86253,
  burgundyLight: 0xf99c8f,
  olive: 0x76c29e,
  oliveDark: 0x58a481,
  oliveLight: 0x9ee0c2
};

export const ZONES = {
  DINING: {
    id: 'dining',
    name: 'Dining Hall',
    description: 'Cosy wood tables, comfortable coral seating, and warm lighting.',
    color: '#f27d6d'
  },
  COUNTER: {
    id: 'counter',
    name: 'Order & Pickup Counter',
    description: 'Warm cream counter with friendly service and fresh pastries.',
    color: '#e0b95b'
  },
  KITCHEN: {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Clean mint & cream tiled kitchen with ranges and prep stations.',
    color: '#76c29e'
  },
  RESTROOM: {
    id: 'restroom',
    name: 'Guest Restroom',
    description: 'Porcelain vanity, mirror, brass hardware, and privacy stalls.',
    color: '#58a481'
  }
} as const;

export type ZoneId = keyof typeof ZONES;

export const PLAYER_CONFIG = {
  radius: 0.45,
  moveSpeed: 5.8,
  turnSpeed: 16.0,
  acceleration: 24.0,
  deceleration: 18.0
};

export const CAMERA_CONFIG = {
  frustumSize: 20,
  isometricAngle: Math.PI / 4, // 45 deg
  elevationAngle: Math.atan(1 / Math.sqrt(2)), // ~35.264 deg
  distance: 35,
  lerpSpeed: 0.08
};
