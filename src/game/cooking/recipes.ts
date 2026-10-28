import { Recipe } from './types';

export const RECIPES: Record<string, Recipe> = {
  pizza: {
    id: 'pizza',
    name: 'Pepperoni Pizza',
    icon: '🍕',
    category: 'pizza',
    description: 'Crispy stone-baked pizza loaded with tomato sauce, mozzarella, and spicy pepperoni.',
    ingredients: ['dough', 'tomato_sauce', 'cheese', 'pepperoni'],
    steps: [
      {
        name: 'Assemble Raw Pizza',
        station: 'prep_table',
        requiredItemIds: ['dough', 'tomato_sauce', 'cheese', 'pepperoni'],
        producesItem: {
          id: 'raw_pizza',
          name: 'Unbaked Pepperoni Pizza',
          icon: '🫓',
          type: 'intermediate',
          recipeId: 'pizza'
        }
      },
      {
        name: 'Bake in Pizza Oven',
        station: 'pizza_oven',
        requiredItemIds: ['raw_pizza'],
        cookTimeSec: 6.5,
        burnTimeSec: 8.0,
        producesItem: {
          id: 'dish_pizza',
          name: 'Crispy Pepperoni Pizza',
          icon: '🍕',
          type: 'dish',
          recipeId: 'pizza'
        }
      }
    ],
    finalDish: {
      id: 'dish_pizza',
      name: 'Crispy Pepperoni Pizza',
      icon: '🍕',
      type: 'dish',
      recipeId: 'pizza'
    }
  },

  burger: {
    id: 'burger',
    name: 'Deluxe Cheeseburger',
    icon: '🍔',
    category: 'burger',
    description: 'Juicy grilled beef patty with melted cheddar, ripe tomato, crisp lettuce on toasted brioche.',
    ingredients: ['burger_bun', 'raw_patty', 'cheese', 'lettuce', 'tomato'],
    steps: [
      {
        name: 'Grill Beef Patty',
        station: 'stovetop_grill',
        requiredItemIds: ['raw_patty'],
        cookTimeSec: 5.5,
        burnTimeSec: 7.5,
        producesItem: {
          id: 'cooked_patty',
          name: 'Grilled Beef Patty',
          icon: '🥩',
          type: 'intermediate',
          recipeId: 'burger'
        }
      },
      {
        name: 'Assemble Deluxe Burger',
        station: 'prep_table',
        requiredItemIds: ['burger_bun', 'cooked_patty', 'cheese', 'lettuce', 'tomato'],
        producesItem: {
          id: 'dish_burger',
          name: 'Deluxe Cheeseburger',
          icon: '🍔',
          type: 'dish',
          recipeId: 'burger'
        }
      }
    ],
    finalDish: {
      id: 'dish_burger',
      name: 'Deluxe Cheeseburger',
      icon: '🍔',
      type: 'dish',
      recipeId: 'burger'
    }
  },

  pasta: {
    id: 'pasta',
    name: 'Parmesan Pasta Marinara',
    icon: '🍝',
    category: 'pasta',
    description: 'Al dente fettuccine tossed in rich San Marzano marinara and dusted with fresh parmesan.',
    ingredients: ['pasta_noodles', 'tomato_sauce', 'cheese'],
    steps: [
      {
        name: 'Simmer Pasta & Marinara',
        station: 'stovetop_grill',
        requiredItemIds: ['pasta_noodles', 'tomato_sauce'],
        cookTimeSec: 5.5,
        burnTimeSec: 7.5,
        producesItem: {
          id: 'simmered_pasta',
          name: 'Simmered Pasta Marinara',
          icon: '🍲',
          type: 'intermediate',
          recipeId: 'pasta'
        }
      },
      {
        name: 'Garnish with Cheese',
        station: 'prep_table',
        requiredItemIds: ['simmered_pasta', 'cheese'],
        producesItem: {
          id: 'dish_pasta',
          name: 'Parmesan Pasta Marinara',
          icon: '🍝',
          type: 'dish',
          recipeId: 'pasta'
        }
      }
    ],
    finalDish: {
      id: 'dish_pasta',
      name: 'Parmesan Pasta Marinara',
      icon: '🍝',
      type: 'dish',
      recipeId: 'pasta'
    }
  },

  sandwich: {
    id: 'sandwich',
    name: 'Artisan Club Sandwich',
    icon: '🥪',
    category: 'sandwich',
    description: 'Triple-decker artisan sandwich layered with smoked ham, melted cheese, crisp greens, and vine tomato.',
    ingredients: ['sliced_bread', 'deli_meat', 'cheese', 'lettuce', 'tomato'],
    steps: [
      {
        name: 'Assemble Artisan Club',
        station: 'prep_table',
        requiredItemIds: ['sliced_bread', 'deli_meat', 'cheese', 'lettuce', 'tomato'],
        producesItem: {
          id: 'dish_sandwich',
          name: 'Artisan Club Sandwich',
          icon: '🥪',
          type: 'dish',
          recipeId: 'sandwich'
        }
      }
    ],
    finalDish: {
      id: 'dish_sandwich',
      name: 'Artisan Club Sandwich',
      icon: '🥪',
      type: 'dish',
      recipeId: 'sandwich'
    }
  },

  fried_chicken: {
    id: 'fried_chicken',
    name: 'Crispy Fried Chicken',
    icon: '🍗',
    category: 'fried_chicken',
    description: 'Tender chicken cutlet dredged in 11 seasoned spices and fried golden crisp.',
    ingredients: ['raw_chicken', 'flour_batter'],
    steps: [
      {
        name: 'Dredge in Seasoned Batter',
        station: 'prep_table',
        requiredItemIds: ['raw_chicken', 'flour_batter'],
        producesItem: {
          id: 'battered_chicken',
          name: 'Battered Raw Chicken',
          icon: '🥣',
          type: 'intermediate',
          recipeId: 'fried_chicken'
        }
      },
      {
        name: 'Deep Fry in Hot Oil',
        station: 'deep_fryer',
        requiredItemIds: ['battered_chicken'],
        cookTimeSec: 6.0,
        burnTimeSec: 8.0,
        producesItem: {
          id: 'dish_chicken',
          name: 'Crispy Fried Chicken',
          icon: '🍗',
          type: 'dish',
          recipeId: 'fried_chicken'
        }
      }
    ],
    finalDish: {
      id: 'dish_chicken',
      name: 'Crispy Fried Chicken',
      icon: '🍗',
      type: 'dish',
      recipeId: 'fried_chicken'
    }
  }
};
