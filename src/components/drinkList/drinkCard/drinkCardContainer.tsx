import * as React from 'react';
import { observer } from 'mobx-react';

import { DrinkCard } from './drinkCard';
import { DrinkModel, DrinkId } from '../../../models/DrinkModel';

export interface IDrinkCardContainerProps {
  handleClick: (drinkId: DrinkId) => void;
  drink: DrinkModel;
  expandedId?: DrinkId;
}

@observer
export class DrinkCardContainer extends React.Component<
  IDrinkCardContainerProps,
  {}
> {
  constructor(props: IDrinkCardContainerProps) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  deleteDrink() {
    if (this.props.drink.default === false) {
      // can only delete user-added drinks
      this.props.drink.delete();
    }
  }

  toggleFavorite() {
    const drink = this.props.drink;
    drink.favorite = !drink.favorite;
  }

  render() {
    return (
      <DrinkCard
        {...this.props}
        drink={this.props.drink.convertToJson()}
        toggleFavorite={this.toggleFavorite}
        deleteDrink={this.deleteDrink}
      />
    );
  }
}
