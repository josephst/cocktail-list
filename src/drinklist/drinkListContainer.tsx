import * as React from 'react';
import { sortBy } from 'lodash';

import { DrinkList } from './drinkList';

import { Drink } from './drink';

export interface DrinkListShared {
  filteredDrinks: Drink[];
  networkError: {
    showError: boolean;
    message: string;
  };
  loading: boolean;
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
      loading: true,
      networkError: {
        showError: false,
        message: '',
      }
    };
  }

  clearNetworkError = () => {
    this.setState({
      loading: false,
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
      .then((db: { drinks: Drink[] }) => {
        return {
          drinks: db.drinks,
        };
      });
  }

  render() {
    return (
      <DrinkList
        filteredDrinks={this.state.filteredDrinks.length > 0 ? this.state.filteredDrinks : this.state.allDrinks}
        networkError={this.state.networkError}
        clearNetworkError={this.clearNetworkError}
        applyDrinkFilter={this.applyDrinkFilter}
        loading={this.state.loading}
      />
    );
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({
          allDrinks: this.sortDrinks(data.drinks),
          networkError: {
            showError: false,
            message: '',
          },
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          allDrinks: [],
          networkError: {
            message: err.message,
            showError: true,
          },
          loading: false,
        });
      });
  }

  applyDrinkFilter = (term: string) => {
    if (term === '') {
      this.setState({ filteredDrinks: [] });
    } else {
      this.setState({
        filteredDrinks: this.state.allDrinks.filter((drink) => drink.name.toLowerCase().indexOf(term) !== -1)
      });
    }
  }

  sortDrinks = (drinks: Drink[]) => {
    return sortBy(drinks, (drink) => {
      return [drink.details.category, drink.name];
    });
  }
}

export { DrinkListContainer };
