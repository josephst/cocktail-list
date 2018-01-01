import * as React from 'react';
import * as enzyme from 'enzyme';
import { v1 as uuid } from 'uuid';

import {
  IngredientContainer,
  IEditIngredientContainerProps,
} from './ingredientContainer';

const makeIngredientContainerProps: () => IEditIngredientContainerProps = () => {
  return {
    handleDeleteIngredient: jest.fn(),
    handleIngredientInput: jest.fn(),
    id: uuid(),
    name: '',
    quantity: 0,
    unit: '',
  };
};

it('renders without crashing', () => {
  const props = makeIngredientContainerProps();
  enzyme.shallow(<IngredientContainer {...props} />);
});
