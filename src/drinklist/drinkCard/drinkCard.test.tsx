import * as React from 'react';
import * as enzyme from 'enzyme';
import DrinkCard from './drinkCard';

import { Drink, Ingredient } from '../drink';

const drink: Drink = {
  'id': 1,
  'default': true,
  'dateCreated': '2017-07-20',
  'hidden': false,
  'favorite': true,
  'name': 'Gin and tonic',
  'ingredients': [
    {
      'ref': 1,
      'quantity': 2,
      'unit': 'oz'
    },
    {
      'ref': 400,
      'quantity': 4,
      'unit': 'oz'
    },
    {
      'ref': 200,
      'quantity': 0.5,
      'unit': 'oz'
    },
    {
      'ref': 600,
      'quantity': 1,
      'unit': undefined
    }
  ],
  'details': {
    'category': 'Highball, Collins, and Fizzes',
    'color': 'Clear',
    'glassType': 'Highball',
    'ice': 'Cubes'
  },
  steps: 'Combine tonic and gin in a highball glass filled with ice.' +
  'Add lime juice. Garnish with a lime wedge and serve'
};
const ingredients: Ingredient[] = [
  {
    'id': 0,
    'name': 'Vodka',
    'type': 'Alcohol'
  },
  {
    'id': 1,
    'name': 'Gin',
    'type': 'Alcohol'
  },
  {
    'id': 200,
    'name': 'Lime juice',
    'type': 'Fruit juice'
  },
  {
    'id': 400,
    'name': 'Tonic',
    'type': 'Mixer'
  },
  {
    'id': 401,
    'name': 'Ginger Beer',
    'type': 'Mixer'
  },
  {
    'id': 600,
    'name': 'Lime wedge',
    'type': 'Garnish'
  }
];

it('should render', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.exists());
});

it('should have information about the drink', () => {
  const card = enzyme.shallow(<DrinkCard drink={drink} ingredients={ingredients} />);
  expect(card.find('.drinkName')).toBeTruthy();
  expect(card.find('.ingredientList')).toBeTruthy();
  expect(card.find('.ingredientList li')).toHaveLength(drink.ingredients.length);
  expect(card.find('.steps').text()).toBe(drink.steps);
});