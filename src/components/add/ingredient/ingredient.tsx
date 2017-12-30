import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { Ingredient } from '../../../typings/drink';

export interface IEditIngredientProps extends Ingredient {
  handleQuantity: (quantity: number) => void;
  handleUnitSelection: (unit: string) => void;
  handleName: (name: string) => void;
  handleSubmit: (e: React.MouseEvent<Button>) => void;
  hasBeenSubmitted: boolean;
}

export const EditIngredient: React.SFC<IEditIngredientProps> = props => {
  return (
    <div>
      <FormGroup controlId="quantity">
        <ControlLabel>Quantity</ControlLabel>
        <FormControl
          type="number"
          value={props.quantity === 0 ? '' : props.quantity}
          onChange={e => {
            const target = e.target as HTMLInputElement;
            return props.handleQuantity(
              target.value === '' ? 0 : Number.parseInt(target.value)
            );
          }}
        />
      </FormGroup>
      <FormGroup controlId="unitSelect">
        <ControlLabel>Unit</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="Unit"
          onChange={e =>
            props.handleUnitSelection((e.target as HTMLInputElement).value)
          }
        >
          <option value="oz">oz.</option>
          <option value="cL">cL.</option>
          <option value="" />
        </FormControl>
      </FormGroup>
      <FormGroup controlId="ingredientName">
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          value={props.name}
          onChange={e => props.handleName((e.target as HTMLInputElement).value)}
        />
      </FormGroup>
      <Button
        type="submit"
        onClick={props.handleSubmit}
        bsStyle={props.hasBeenSubmitted ? 'success' : 'primary'}
      >
        {props.hasBeenSubmitted ? 'Update' : 'Add'}
      </Button>
    </div>
  );
};
