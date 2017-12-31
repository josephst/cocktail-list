import * as React from 'react';
import { observer } from 'mobx-react';

import { DrinkCard } from './drinkCard';
import { DrinkModel, DrinkId } from '../../../models/DrinkModel';
import { action } from 'mobx';

export interface IDrinkCardContainerProps {
  toggleExpansion: (drinkId: DrinkId) => void;
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
    this.deleteDrink = this.deleteDrink.bind(this);
  }

  @action
  deleteDrink() {
    if (this.props.drink.default === false) {
      // can only delete user-added drinks
      this.props.drink.delete();
    }
  }

  @action
  toggleFavorite() {
    const drink = this.props.drink;
    drink.favorite = !drink.favorite;
  }

  render() {
    return (
      <DrinkCard
        {...this.props}
        handleClickForExpansion={this.props.toggleExpansion}
        expanded={
          this.props.expandedId
            ? this.props.expandedId === this.props.drink.id
            : false
        }
        drink={this.props.drink.convertToJson()}
        toggleFavorite={this.toggleFavorite}
        deleteDrink={this.deleteDrink}
      />
    );
  }
}
