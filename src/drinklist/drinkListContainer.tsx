import * as React from 'react';

import { DrinkList } from './drinkList';
import { DrinkFilter } from './search/search';

import { Drink, Ingredient } from './drink';

export interface DrinkListShared {
  filteredDrinks: Drink[];
  ingredients: Ingredient[];
  networkError: {
    showError: boolean;
    message: string;
  };
}

interface DrinkListContainerState extends DrinkListShared {
  allDrinks: Drink[];
}

class DrinkListContainer extends React.Component<{}, DrinkListContainerState> {
  constructor() {
    super();
    this.state = {
      filteredDrinks: [],
      allDrinks: [],
      ingredients: [],
      networkError: {
        showError: false,
        message: '',
      }
    };
  }

  hideNetworkError = () => {
    this.setState({
      networkError: {
        showError: false,
        message: '',
      },
    });
  }

  fetchData = async () => {
    return fetch(`${process.env.PUBLIC_URL}/data/db.json`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error('Error occured while fetching list of drinks');
      })
      .then((res) => res.json())
      .then((db: { drinks: Drink[], ingredients: Ingredient[] }) => {
        return {
          drinks: db.drinks.sort((a, b) => a.name < b.name ? 0 : 1),
          ingredients: db.ingredients
        };
      });
  }

  render() {
    return (
      <div>
        <DrinkFilter
          updateSearchTerm={this.filterDrinkList}
        />
        <DrinkList
          filteredDrinks={this.state.filteredDrinks.length > 0 ? this.state.filteredDrinks : this.state.allDrinks}
          ingredients={this.state.ingredients}
          networkError={this.state.networkError}
          hideNetworkError={this.hideNetworkError}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({
          allDrinks: data.drinks,
          ingredients: data.ingredients,
          networkError: {
            showError: false,
            message: '',
          }
        });
      })
      .catch((err) => {
        this.setState({
          allDrinks: [],
          ingredients: [],
          networkError: {
            message: err.message,
            showError: true,
          },
        });
      });
  }

  private filterDrinkList = (term: string) => {
    if (term === '') {
      this.setState({ filteredDrinks: this.state.allDrinks });
    } else {
      this.setState({
        filteredDrinks: this.state.allDrinks.filter((drink) => drink.name.toLowerCase().indexOf(term) !== -1)
      });
    }
  }
}

export { DrinkListContainer };
