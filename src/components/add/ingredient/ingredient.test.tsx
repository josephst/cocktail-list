import * as React from 'react';
import * as enzyme from 'enzyme';

import { EditIngredient, IEditIngredientProps } from './ingredient';
import { IPossibleIngredientUnit } from '../../../typings/drink';

const possibleUnits: IPossibleIngredientUnit[] = [{ code: 'oz', name: 'oz.' }];

const makeDrinkProps: () => IEditIngredientProps = () => {
  return {
    handleDelete: jest.fn(),
    handleName: jest.fn(),
    handleQuantity: jest.fn(),
    handleUnitSelection: jest.fn(),
    name: '',
    possibleUnits,
    quantity: 0,
    type: '',
    unit: possibleUnits[0].code,
  };
};

it('renders without crashing', () => {
  const props = makeDrinkProps();
  enzyme.shallow(<EditIngredient {...props} />);
});
