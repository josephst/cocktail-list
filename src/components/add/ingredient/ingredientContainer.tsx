import * as React from 'react';
import { Button } from 'react-bootstrap';

import { EditIngredient, IEditIngredientProps } from './ingredient';
import { Ingredient } from '../../../typings/drink';

type IngredientID = number;
export interface IAddedIngredient extends Ingredient {
  id: IngredientID;
}

interface IEditIngredientContainerProps extends IAddedIngredient {
  saveIngredient: (ing: IAddedIngredient) => void;
  hasBeenSubmitted: boolean;
}

interface IEditIngredientContainerState extends Ingredient {
  // name, type, quantity, unit from Ingredient
}

export class IngredientContainer extends React.Component<
  IEditIngredientContainerProps,
  IEditIngredientContainerState
> {
  constructor(props: IEditIngredientContainerProps) {
    super(props);
    this.state = {
      name: this.props.name || '',
      quantity: this.props.quantity || 0,
      unit: this.props.unit || '',
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleUnitSelection = this.handleUnitSelection.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuantity(quantity: number) {
    this.setState({ quantity });
  }

  handleUnitSelection(unit: string) {
    this.setState({ unit });
  }

  handleName(name: string) {
    this.setState({ name });
  }

  handleSubmit(e: React.MouseEvent<Button>) {
    e.preventDefault();
    const ingredient: IAddedIngredient = {
      id: this.props.id,
      name: this.state.name,
      quantity: this.state.quantity,
      unit: this.state.unit === '' ? undefined : this.state.unit,
    };
    this.props.saveIngredient(ingredient);
  }

  render() {
    const { name, quantity, type, unit }: Ingredient = this.state;
    const props: IEditIngredientProps = {
      handleName: this.handleName,
      handleQuantity: this.handleQuantity,
      handleSubmit: this.handleSubmit,
      handleUnitSelection: this.handleUnitSelection,
      hasBeenSubmitted: this.props.hasBeenSubmitted,
      name,
      quantity,
      type,
      unit,
    };
    return <EditIngredient {...props} />;
  }
}
