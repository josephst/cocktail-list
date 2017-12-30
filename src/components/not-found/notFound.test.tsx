import * as React from 'react';
import * as enzyme from 'enzyme';

import { NotFound } from '.';

it('renders without crashing', () => {
  const div = enzyme.shallow(<NotFound />);
  expect(div.exists()).toBeTruthy();
});
