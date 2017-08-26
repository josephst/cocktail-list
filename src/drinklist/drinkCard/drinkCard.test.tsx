import * as React from 'react';
import * as enzyme from 'enzyme';
import DrinkCard from './drinkCard';

import { Drink } from '../drink';

const drink: Drink = {
  id: 1,
  default: true,
  dateCreated: '2017-07-20',
  hidden: false,
  favorite: true,
  name: 'Gin and tonic',
  ingredients: [{
    name: 'Gin',
    type: 'Liquid',
    quantity: 2,
    unit: 'oz'
  },
  {
    name: 'Tonic',
    type: 'Liquid',
    quantity: 4,
    unit: 'oz'
  },
  {
    name: 'Lime juice',
    type: 'Liquid',
    quantity: 0.5,
    unit: 'oz'
  },
  {
    name: 'Lime wedge',
    type: 'Garnish',
    quantity: 1,
    unit: undefined
  }
  ],
  details: {
    category: 'Highball, Collins, and Fizzes',
    color: 'Clear',
    glassType: 'Highball',
    ice: 'Cubes'
  },
  steps: 'Combine tonic and gin in a highball glass filled with ice.' +
  'Add lime juice. Garnish with a lime wedge and serve'
};

it('should render', () => {
  const card = enzyme.shallow(<DrinkCard drink={(drink)} />);
  expect(card.exists());
});

it('should have information about the drink', () => {
    const card = enzyme.shallow(<DrinkCard drink={(drink)} />);
    expect(card.find('.drinkName')).toBeTruthy();
    expect(card.find('.ingredientList')).toBeTruthy();
    expect(card.find('.ingredientList li')).toHaveLength(drink.ingredients.length);
    expect(card.find('.steps').text()).toBe(drink.steps);
});