import * as React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Col,
  Glyphicon,
} from 'react-bootstrap';

import { Ingredient, IPossibleIngredientUnit } from '../../../models/drink';

export interface IEditIngredientProps extends Ingredient {
  handleQuantity: (quantity: number) => void;
  handleUnitSelection: (unit: string) => void;
  handleName: (name: string) => void;
  handleDelete: () => void;
  possibleUnits: IPossibleIngredientUnit[];
}

export const EditIngredient: React.SFC<IEditIngredientProps> = props => {
  return (
    <div>
      <Row>
        <Col xs={3}>
          <FormGroup controlId="quantity" bsSize="small">
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
        </Col>
        <Col xs={2}>
          <FormGroup controlId="unitSelect" bsSize="small">
            <ControlLabel>Unit</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="Unit"
              onChange={e =>
                props.handleUnitSelection((e.target as HTMLInputElement).value)
              }
            >
              {props.possibleUnits.map(unit => (
                <option key={unit.code} value={unit.code}>
                  {unit.name}
                </option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={5}>
          <FormGroup controlId="ingredientName" bsSize="small">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={props.name}
              onChange={e =>
                props.handleName((e.target as HTMLInputElement).value)
              }
            />
          </FormGroup>
        </Col>
        <Col xs={1}>
          <FormGroup controlId="deleteIngredient" bsSize="small">
            <ControlLabel />
            <Button
              type="button"
              bsSize="small"
              onClick={props.handleDelete}
              bsStyle="danger"
            >
              <Glyphicon glyph="remove" />
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};
