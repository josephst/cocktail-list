import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = enzyme.shallow(<App />);
  expect(div.find('h2').text()).toEqual('Welcome to React');
});
