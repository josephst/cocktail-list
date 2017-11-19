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
      loading={false}
    />
  );
  expect(list.find('DrinkListItem')).toHaveLength(multiple);
});

it('shows a loading spinner while waiting on data', () => {
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={[]}
      networkError={{ showError: false, message: '' }}
      clearNetworkError={jest.fn()}
      applyDrinkFilter={jest.fn()}
      loading={true}
    />
  );
  expect(list.find('Loader')).toHaveLength(1);
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
