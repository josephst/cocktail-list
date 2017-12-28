import * as React from 'react';
import * as enzyme from 'enzyme';

import { AboutApp } from '.';

it('renders without crashing', () => {
  const div = enzyme.shallow(<AboutApp />);
  expect(div.exists()).toBeTruthy();
});

it('shows a copyright message', () => {
  const div = enzyme.shallow(<AboutApp />);
  expect(div.find('#copyright')).toBeTruthy();
});
