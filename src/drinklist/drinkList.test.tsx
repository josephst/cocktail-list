import * as React from 'react';
import * as enzyme from 'enzyme';
import Snackbar from 'material-ui/Snackbar';

import { DrinkList } from './drinkList';

import { drink, ingredient } from '../fixtures';

it('should display a list of drinks', () => {
  const multiple = 2;
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={new Array(multiple).fill(drink)}
      ingredients={[ingredient]}
      networkError={{ showError: false, message: '' }}
      hideNetworkError={() => false}
    />);
  expect(list.find('DrinkCard')).toHaveLength(multiple);
});

it('should display a snackbar', () => {
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={[]}
      ingredients={[]}
      networkError={{ showError: true, message: 'Test' }}
      hideNetworkError={() => false}
    />
  );
  expect(list.find(Snackbar)).toHaveLength(1);
});