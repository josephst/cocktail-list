import * as React from 'react';
import * as enzyme from 'enzyme';
import { DrinkList } from './drinkList';

import { Drink } from './drink';

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
    unit: null
  }
  ],
  details: {
    category: 'Highball, Collins, and Fizzes',
    color: 'Clear',
    glassType: 'Highball',
    ice: 'Cubes'
  },
  steps: [
    'Combine tonic and gin in a highball glass filled with ice',
    'Add lime juice',
    'Garnish with a lime wedge and serve'
  ]
};

it('should display a list of drinks', () => {
  const list = enzyme.shallow(<DrinkList drinks={new Array(3).fill(drink)} />);
  expect(list.find('li')).toHaveLength(3);
});