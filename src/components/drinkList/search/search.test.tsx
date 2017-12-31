import * as React from 'react';
import * as enzyme from 'enzyme';

import { SearchForDrink } from '.';

it('renders without crashing', () => {
  const searchFn = jest.fn();
  const div = enzyme.shallow(<SearchForDrink searchForDrink={searchFn} />);
  expect(div.exists()).toBeTruthy();
});

it('calls the search function', () => {
  const searchFn = jest.fn();
  // have to mount in order to get search bar to render
  const searchBar = enzyme.mount(<SearchForDrink searchForDrink={searchFn} />);
  const searchTerm = 'gin';
  searchBar.find('#search').simulate('change', {
    target: { value: searchTerm },
  });
  expect(searchFn).toHaveBeenCalled();
});
