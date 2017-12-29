import * as React from 'react';
import * as enzyme from 'enzyme';

import { AddDrink } from '.';

it('renders without crashing', () => {
  const saveDrinkFn = jest.fn();
  const div = enzyme.shallow(<AddDrink saveDrink={saveDrinkFn} />);
  expect(div.exists()).toBeTruthy();
});
