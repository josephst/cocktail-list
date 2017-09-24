import * as React from 'react';
import * as enzyme from 'enzyme';
import { range } from 'lodash';

import { DrinkList } from './drinkList';
import { makeDrink } from '../fixtures';

it('should display a list of drinks', () => {
  const multiple = 2;
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={range(0, multiple).map(index => makeDrink(index))}
      networkError={{ showError: false, message: '' }}
      clearNetworkError={jest.fn()}
      applyDrinkFilter={jest.fn()}
    />);
  expect(list.find('DrinkListItem')).toHaveLength(multiple);
});

it('should sort first by category', () => {
  const multiple = 2;
  const drinks = range(0, multiple).map(index => makeDrink(index));
  drinks[0].details.category = 'z';
  drinks[1].details.category = 'a';
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={drinks}
      networkError={{ showError: false, message: '' }}
      clearNetworkError={jest.fn()}
      applyDrinkFilter={jest.fn()}
    />
  );
  const items = list.find('DrinkListItem');
  // tslint:disable-next-line:no-console
  expect(items.get(0).props.drink.id).toBe(1);
  expect(items.get(0).props.drink.details.category).toBe('a');
});

// it('should display a modal', () => {
  // TODO: use bottom sidebar for this?
//   const list = enzyme.shallow(
//     <DrinkList
//       filteredDrinks={[]}
//       ingredients={[]}
//       networkError={{ showError: true, message: 'Test' }}
//       clearNetworkError={() => false}
//     />
//   );
//   expect(list.find(Modal)).toHaveLength(1);
// });