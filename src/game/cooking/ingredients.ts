import { Ingredient } from './types';

export const INGREDIENTS: Record<string, Ingredient> = {
  // Grains / Doughs
  dough: {
    id: 'dough',
    name: 'Artisan Pizza Dough',
    icon: '🫓',
    category: 'grain',
    color: 0xf5deb3,
    description: 'Slow-fermented pizza dough ball ready for stretching.'
  },
  burger_bun: {
    id: 'burger_bun',
    name: 'Brioche Burger Bun',
    icon: '🍞',
    category: 'grain',
    color: 0xd2a679,
    description: 'Golden buttered brioche sesame burger bun.'
  },
  sliced_bread: {
    id: 'sliced_bread',
    name: 'Artisan Sliced Bread',
    icon: '🥪',
    category: 'grain',
    color: 0xe6c280,
    description: 'Thick sliced country sourdough loaf.'
  },
  pasta_noodles: {
    id: 'pasta_noodles',
    name: 'Fresh Fettuccine Pasta',
    icon: '🍝',
    category: 'grain',
    color: 0xffe082,
    description: 'Handmade fresh egg fettuccine noodles.'
  },
  flour_batter: {
    id: 'flour_batter',
    name: 'Seasoned Flour & Batter',
    icon: '🥣',
    category: 'grain',
    color: 0xfff8e7,
    description: 'Special blend of 11 herbs, spices, and dredging flour.'
  },

  // Meats & Proteins
  raw_patty: {
    id: 'raw_patty',
    name: 'Raw Prime Beef Patty',
    icon: '🥩',
    category: 'meat',
    color: 0xa93226,
    description: 'Freshly ground prime chuck steak beef patty.'
  },
  raw_chicken: {
    id: 'raw_chicken',
    name: 'Raw Chicken Tender',
    icon: '🍗',
    category: 'meat',
    color: 0xf5b7b1,
    description: 'Tender fresh chicken cutlet ready for dredging.'
  },
  deli_meat: {
    id: 'deli_meat',
    name: 'Smoked Honey Ham',
    icon: '🥓',
    category: 'meat',
    color: 0xd98880,
    description: 'Slow-smoked sliced deli ham.'
  },
  pepperoni: {
    id: 'pepperoni',
    name: 'Spicy Pepperoni Slices',
    icon: '🍕',
    category: 'meat',
    color: 0xb03a2e,
    description: 'Authentic cured spicy Italian pepperoni slices.'
  },

  // Dairy & Sauces
  cheese: {
    id: 'cheese',
    name: 'Fior di Latte & Cheddar',
    icon: '🧀',
    category: 'dairy',
    color: 0xf9e79f,
    description: 'Melty mozzarella and sharp Wisconsin cheddar.'
  },
  tomato_sauce: {
    id: 'tomato_sauce',
    name: 'San Marzano Tomato Sauce',
    icon: '🍅',
    category: 'produce',
    color: 0xc0392b,
    description: 'Rich crushed plum tomato sauce with basil and garlic.'
  },

  // Fresh Produce
  lettuce: {
    id: 'lettuce',
    name: 'Crisp Romaine Lettuce',
    icon: '🥬',
    category: 'produce',
    color: 0x58d68d,
    description: 'Freshly harvested chilled organic romaine leaves.'
  },
  tomato: {
    id: 'tomato',
    name: 'Ripe Heirloom Tomato',
    icon: '🍅',
    category: 'produce',
    color: 0xec7063,
    description: 'Plump ripe vine tomato slices.'
  }
};
