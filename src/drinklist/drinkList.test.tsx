import * as React from 'react';
import * as enzyme from 'enzyme';
import { DrinkList } from './drinkList';

import { drink, ingredient } from '../fixtures';

it('should display a list of drinks', () => {
  const multiple = 3;
  const list = enzyme.shallow(<DrinkList drinks={new Array(multiple).fill(drink)} ingredients={[ingredient]} />);
  expect(list.find('DrinkCard')).toHaveLength(multiple);
});