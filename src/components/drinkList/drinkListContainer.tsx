import * as React from 'react';
import { match } from 'react-router';
import { inject, observer } from 'mobx-react';
import * as escapeStringRegexp from 'escape-string-regexp';
// import { sortBy } from 'lodash';

import { DrinkList } from './drinkList';
import { SearchForDrink } from './search';

import { DrinkStore } from '../../stores';
import { DrinkModel } from '../../models/DrinkModel';

interface IDrinkListRouteProps {
  drinkStore?: DrinkStore;
  match: match<{}>;
}

interface IDrinkListRouteState {
  searchedDrinks: DrinkModel[];
  searchTerm: string;
  searchRegExp: RegExp;
}

@inject((allStores: { drinkStore: DrinkStore }) => ({
  drinkStore: allStores.drinkStore,
}))
@observer
class DrinkListContainer extends React.Component<
  IDrinkListRouteProps,
  IDrinkListRouteState
> {
  constructor(props: IDrinkListRouteProps) {
    super(props);
    this.state = {
      searchedDrinks: [],
      searchTerm: '',
      searchRegExp: /.+/,
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  // TODO: remove and connect to MobX
  componentDidMount() {
    // let drinks = [4, 3, 2, 1, 0].map(i => makeDrink(i)).map(
    //   drink =>
    //     (drink = {
    //       ...drink,
    //       favorite: Math.random() > 0.5,
    //       name: `${drink.name}-${drink.id}`,
    //     })
    // );
    // // alphabetical order
    // drinks = sortBy(drinks, drink => drink.name);
    this.setState({
      searchedDrinks: this.props.drinkStore ? this.props.drinkStore.drinks : [],
      searchTerm: '',
    });
  }

  handleSearchInput(term: string) {
    // TODO: debounce?
    const searchRegExp = new RegExp(escapeStringRegexp(term.toLowerCase()));
    this.setState({ searchTerm: term, searchRegExp });
  }

  render() {
    let drinksToDisplay: DrinkModel[];
    // first, narrow down to favorites/ non-favorites
    if (
      this.props.drinkStore &&
      this.props.match &&
      this.props.match.path === '/favorites'
    ) {
      drinksToDisplay = this.props.drinkStore.favoriteDrinks || [];
    } else if (this.props.drinkStore) {
      drinksToDisplay = this.props.drinkStore.drinks || [];
    } else {
      drinksToDisplay = [];
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
        <DrinkList drinks={drinksToDisplay} />
      </div>
    );
  }
}

export { DrinkListContainer };
