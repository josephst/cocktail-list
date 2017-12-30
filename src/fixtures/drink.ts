import { v4 as uuid } from 'node-uuid';
import { Drink } from '../typings/drink';

export const drink: Drink = {
  get id() {
    return uuid();
  },
  default: true,
  dateCreated: '2017-07-20',
  hidden: false,
  favorite: false,
  name: 'Gin',
  ingredients: [
    {
      name: 'Gin',
      type: 'Alcohol',
      quantity: 2,
      unit: 'oz',
    },
    {
      name: 'Lime',
      type: 'Garnish',
      quantity: 1,
    },
  ],
  details: {
    category: 'Testing',
    color: 'Clear',
    glassType: 'Highball',
    ice: 'Cubes',
  },
  source: 'Test Drinks',
  steps: 'Testing',
};

export const makeDrink: () => Drink = () => {
  return Object.assign({}, drink);
};
