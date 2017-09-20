import * as React from 'react';
import * as enzyme from 'enzyme';

import { AutoCompleteDrinkSearch } from './search';

const drinks = ['drink1', 'drink2'];

it('should render', () => {
  const searchBox = enzyme.shallow(<AutoCompleteDrinkSearch drinkNames={drinks} updateSearchTerm={() => 42} />);
  expect(searchBox.exists());
});
