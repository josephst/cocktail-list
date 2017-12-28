import * as React from 'react';
import * as enzyme from 'enzyme';

import { Card } from './card';

import { makeDrink } from '../../fixtures';

it('renders without crashing', () => {
  const expandDrinkMock = jest.fn();
  const drink = makeDrink(0);
  const div = enzyme.shallow(
    <Card drink={drink} expandDrink={expandDrinkMock} />
  );
  expect(div.exists()).toBeTruthy();
});