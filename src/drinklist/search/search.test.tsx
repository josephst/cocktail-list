import * as React from 'react';
import * as enzyme from 'enzyme';

import { DrinkFilter } from './search';

it('should render', () => {
  const searchBox = enzyme.shallow(<DrinkFilter updateSearchTerm={() => 42} />);
  expect(searchBox.exists());
});
