import * as React from 'react';
import { match } from 'react-router';
import * as escapeStringRegexp from 'escape-string-regexp';
import { sortBy } from 'lodash';

import { DrinkList } from './drinkList';
import { SearchForDrink } from './search';

import { makeDrink } from '../../fixtures/drink';
import { Drink, DrinkId } from '../../typings/drink';

interface DrinkListRouteProps {
  match: match<{}>;
}

interface DrinkListRouteState {
  allDrinks: Drink[];
  searchedDrinks: Drink[];
  searchTerm: string;
  searchRegExp: RegExp;
}

class DrinkListContainer extends React.Component<
  DrinkListRouteProps,
  DrinkListRouteState
> {
  constructor(props: DrinkListRouteProps) {
    super(props);
    this.state = {
      allDrinks: [],
      searchedDrinks: [],
      searchTerm: '',
      searchRegExp: /.+/,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  // TODO: remove and connect to MobX
  componentDidMount() {
    let drinks = [4, 3, 2, 1, 0].map(i => makeDrink(i)).map(
      drink =>
        (drink = {
          ...drink,
          favorite: drink.id % 2 === 0,
          name: `${drink.name}-${drink.id}`,
        })
    );
    // alphabetical order
    drinks = sortBy(drinks, drink => drink.name);
    this.setState({
      allDrinks: drinks,
      searchedDrinks: drinks,
      searchTerm: '',
    });
  }

  toggleFavorite(updateId: DrinkId) {
    const drinkIndex = this.state.allDrinks.findIndex(
      drink => drink.id === updateId
    );
    if (drinkIndex !== -1) {
      const updatedDrinks = this.state.allDrinks.map(drink => {
        if (drink.id === updateId) {
          return { ...drink, favorite: !drink.favorite };
        } else {
          return drink;
        }
      });
      this.setState({ allDrinks: updatedDrinks });
    }
  }

  handleSearchInput(term: string) {
    // TODO: debounce?
    const searchRegExp = new RegExp(escapeStringRegexp(term.toLowerCase()));
    this.setState({ searchTerm: term, searchRegExp });
  }

  render() {
    let drinksToDisplay = [];
    // first, narrow down to favorites/ non-favorites
    if (this.props.match && this.props.match.path === '/favorites') {
      drinksToDisplay = this.state.allDrinks.filter(drink => drink.favorite);
    } else {
      drinksToDisplay = this.state.allDrinks;
    }
    // then, apply search term
    drinksToDisplay =
      this.state.searchTerm === ''
        ? drinksToDisplay
        : drinksToDisplay.filter(
            drink =>
              this.state.searchRegExp.test(drink.name.toLowerCase()) ||
              drink.ingredients.findIndex(ing =>
                this.state.searchRegExp.test(ing.name.toLowerCase())
              ) !== -1
          );

    return (
      <div>
        <SearchForDrink searchForDrink={this.handleSearchInput} />
        <DrinkList
          drinks={drinksToDisplay}
          toggleFavorite={this.toggleFavorite}
        />
      </div>
    );
  }
}

export { DrinkListContainer };
