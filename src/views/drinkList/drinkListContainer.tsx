import * as React from 'react';
import { match } from 'react-router';

import { DrinkList } from './drinkList';

import { makeDrink } from '../../fixtures/drink';
import { Drink, DrinkId } from '../../typings/drink';

interface DrinkListRouteProps {
  match: match<{}>;
}

class DrinkListContainer extends React.Component<
  DrinkListRouteProps,
  { drinks: Drink[] }
> {
  constructor(props: DrinkListRouteProps) {
    super(props);
    this.state = { drinks: [] };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  // TODO: remove and connect to MobX
  componentDidMount() {
    const drinks = [0, 1, 2, 3, 4].map(i => makeDrink(i)).map(
      drink =>
        (drink = {
          ...drink,
          favorite: drink.id % 2 === 0,
          name: `${drink.name}-${drink.id}`,
        })
    );
    this.setState({ drinks });
  }

  toggleFavorite(updateId: DrinkId) {
    const drinkIndex = this.state.drinks.findIndex(
      drink => drink.id === updateId
    );
    if (drinkIndex !== -1) {
      const updatedDrinks = this.state.drinks.map(drink => {
        if (drink.id === updateId) {
          return { ...drink, favorite: !drink.favorite };
        } else {
          return drink;
        }
      });
      this.setState({ drinks: updatedDrinks });
    }
  }

  render() {
    if (this.props.match && this.props.match.path === '/favorites') {
      const favoriteDrinks = this.state.drinks.filter(drink => drink.favorite);
      return (
        <DrinkList
          drinks={favoriteDrinks}
          toggleFavorite={this.toggleFavorite}
        />
      );
    } else {
      return (
        <DrinkList
          drinks={this.state.drinks}
          toggleFavorite={this.toggleFavorite}
        />
      );
    }
  }
}

export { DrinkListContainer };
