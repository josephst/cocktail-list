import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = enzyme.shallow(<App />);
  expect(div.exists()).toBeTruthy();
});
