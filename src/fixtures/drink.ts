import { Drink } from '../drinklist/drink';

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
      unit: 'oz'
    },
  ],
  details: {
    category: 'Testing',
    color: 'Clear',
    glassType: 'Highball',
    ice: 'Cubes'
  },
  steps: 'Testing'
};

export const makeDrink: (index: number) => Drink = (i) => {
  return ({
    id: i,
    default: true,
    dateCreated: '2017-09-24',
    hidden: false,
    favorite: true,
    name: 'Gin',
    ingredients: [{
      name: 'Gin',
      type: 'Alcohol',
      quantity: 2,
      unit: 'oz'
    }],
    details: {
      category: 'Testing',
      color: 'Clear',
      glassType: 'Highall',
      ice: 'Cubes'
    },
    steps: 'Testing'
  });
};