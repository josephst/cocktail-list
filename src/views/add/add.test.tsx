import * as React from 'react';
import * as enzyme from 'enzyme';

import { AddDrink } from '.';

it('renders without crashing', () => {
  const div = enzyme.shallow(<AddDrink />);
  expect(div.exists()).toBeTruthy();
});
