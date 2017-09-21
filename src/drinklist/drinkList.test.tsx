import * as React from 'react';
import * as enzyme from 'enzyme';
import { Modal } from 'semantic-ui-react';

import { DrinkList } from './drinkList';

import { drink, ingredient } from '../fixtures';

it('should display a list of drinks', () => {
  const multiple = 2;
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={new Array(multiple).fill(drink)}
      ingredients={[ingredient]}
      networkError={{ showError: false, message: '' }}
      clearNetworkError={() => false}
    />);
  expect(list.find('DrinkCard')).toHaveLength(multiple);
});

it('should display a modal', () => {
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={[]}
      ingredients={[]}
      networkError={{ showError: true, message: 'Test' }}
      clearNetworkError={() => false}
    />
  );
  expect(list.find(Modal)).toHaveLength(1);
});