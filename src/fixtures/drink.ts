import { Drink } from '../typings/drink';

export const drink: Drink = {
  id: 1,
  default: true,
  dateCreated: '2017-07-20',
  hidden: false,
  favorite: true,
  name: 'Gin',
  ingredients: [
    {
      name: 'Gin',
      type: 'Alcohol',
      quantity: 2,
      unit: 'oz',
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

export const makeDrink: (index: number) => Drink = i => {
  return Object.assign({}, drink, { id: i });
};
