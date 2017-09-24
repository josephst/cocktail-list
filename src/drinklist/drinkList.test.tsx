import * as React from 'react';
import * as enzyme from 'enzyme';
// import { Modal } from 'semantic-ui-react';

import { DrinkList } from './drinkList';

import { drink } from '../fixtures';

it('should display a list of drinks', () => {
  const multiple = 2;
  const list = enzyme.shallow(
    <DrinkList
      filteredDrinks={new Array(multiple).fill(drink)}
      networkError={{ showError: false, message: '' }}
      clearNetworkError={jest.fn()}
      applyDrinkFilter={jest.fn()}
    />);
  expect(list.find('DrinkListItem')).toHaveLength(multiple);
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