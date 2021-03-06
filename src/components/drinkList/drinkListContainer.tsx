import * as React from 'react';
// import { match } from 'react-router';
import { inject, observer } from 'mobx-react';
import escapeStringRegexp from 'escape-string-regexp';

import { DrinkList } from './drinkList';
import { SearchForDrink } from './search';

import { DrinkStore } from '../../stores';
import { DrinkModel } from '../../models/DrinkModel';

export interface IDrinkListProps {
  drinkStore?: DrinkStore;
  displayFavorites: boolean;
}

interface IDrinkListState {
  searchedDrinks: DrinkModel[];
  searchTerm: string;
  searchRegExp: RegExp;
}

@inject(allStores => ({
  drinkStore: (allStores as { drinkStore: DrinkStore }).drinkStore,
}))
@observer
class DrinkListContainer extends React.Component<
  IDrinkListProps,
  IDrinkListState
> {
  constructor(props: IDrinkListProps) {
    super(props);
    this.state = {
      searchedDrinks: [],
      searchTerm: '',
      searchRegExp: /.+/,
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      searchedDrinks: this.props.drinkStore ? this.props.drinkStore.drinks : [],
      searchTerm: '',
    });
  }

  handleSearchInput(term: string) {
    const searchRegExp = new RegExp(escapeStringRegexp(term.toLowerCase()));
    this.setState({ searchTerm: term, searchRegExp });
  }

  render() {
    let drinksToDisplay: DrinkModel[];
    let pageTitle = 'All Drinks';
    // first, narrow down to favorites/ non-favorites
    if (this.props.drinkStore && this.props.displayFavorites) {
      // displaying favorites
      drinksToDisplay = this.props.drinkStore.favoriteDrinks || [];
      pageTitle = 'Favorite Drinks';
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
    const isLoading = this.props.drinkStore
      ? this.props.drinkStore.isLoading
      : false;
    return (
      <div>
        <SearchForDrink searchForDrink={this.handleSearchInput} />
        <DrinkList
          drinks={drinksToDisplay}
          pageTitle={pageTitle}
          loading={isLoading}
        />
      </div>
    );
  }
}

export { DrinkListContainer };
