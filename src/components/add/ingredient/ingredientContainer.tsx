import * as React from 'react';

import { EditIngredient, IEditIngredientProps } from './ingredient';
import { Ingredient, IPossibleIngredientUnit } from '../../../models/drink';

type IngredientID = string; // UUID
export interface IAddedIngredient extends Ingredient {
  id: IngredientID;
}

export interface IEditIngredientContainerProps extends IAddedIngredient {
  handleIngredientInput: (ing: IAddedIngredient) => void;
  handleDeleteIngredient?: (ing: IAddedIngredient) => void;
}

interface IEditIngredientContainerState extends IAddedIngredient {
  // name, type, quantity, unit from Ingredient
}

export class IngredientContainer extends React.Component<
  IEditIngredientContainerProps,
  IEditIngredientContainerState
> {
  static readonly possibleUnits: IPossibleIngredientUnit[] = [
    { code: 'oz', name: 'oz.' },
    { code: 'mL', name: 'mL.' },
    { code: 'cL', name: 'cL.' },
    { code: '', name: '' },
  ];
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
      possibleUnits: IngredientContainer.possibleUnits,
    };
    return <EditIngredient {...props} />;
  }
}
