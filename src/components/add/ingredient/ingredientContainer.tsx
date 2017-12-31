import * as React from 'react';

import { EditIngredient, IEditIngredientProps } from './ingredient';
import { Ingredient } from '../../../typings/drink';

type IngredientID = string; // UUID
export interface IAddedIngredient extends Ingredient {
  id: IngredientID;
}

interface IEditIngredientContainerProps extends IAddedIngredient {
  handleIngredientInput: (ing: IAddedIngredient) => void;
  handleDeleteIngredient?: (ing: IAddedIngredient) => void;
  hasBeenSubmitted: boolean;
  shouldAutofocus?: boolean;
}

interface IEditIngredientContainerState extends IAddedIngredient {
  // name, type, quantity, unit from Ingredient
}

export class IngredientContainer extends React.Component<
  IEditIngredientContainerProps,
  IEditIngredientContainerState
> {
  constructor(props: IEditIngredientContainerProps) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      quantity: this.props.quantity,
      unit: this.props.unit,
    };
  }

  handleQuantity = (quantity: number) => {
    this.props.handleIngredientInput({ ...this.ingredientInfo, quantity });
  };

  handleUnitSelection = (unit: string) => {
    this.props.handleIngredientInput({ ...this.ingredientInfo, unit });
  };

  handleName = (name: string) => {
    this.props.handleIngredientInput({ ...this.ingredientInfo, name });
  };

  handleDeleteIngredient = () => {
    if (this.props.handleDeleteIngredient) {
      this.props.handleDeleteIngredient(this.ingredientInfo);
    }
  };

  get ingredientInfo(): IAddedIngredient {
    return {
      id: this.props.id,
      name: this.props.name,
      quantity: this.props.quantity,
      unit: this.props.unit === '' ? undefined : this.state.unit,
    };
  }

  render() {
    const { name, quantity, type, unit }: Ingredient = this.props;
    const props: IEditIngredientProps = {
      handleName: this.handleName,
      handleQuantity: this.handleQuantity,
      handleUnitSelection: this.handleUnitSelection,
      handleDelete: this.handleDeleteIngredient,
      name,
      quantity,
      type,
      unit,

      // UI vars
      hasBeenSubmitted: this.props.hasBeenSubmitted,
      shouldAutofocus: this.props.shouldAutofocus,
    };
    return <EditIngredient {...props} />;
  }
}
