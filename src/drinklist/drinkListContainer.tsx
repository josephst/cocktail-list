import * as React from 'react';

import { DrinkList } from './drinkList';

import { Drink } from './drink';

export interface DrinkListShared {
  filteredDrinks: Drink[];
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
      networkError: {
        showError: false,
        message: '',
      }
    };
  }

  clearNetworkError = () => {
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
      .then((db: { drinks: Drink[] }) => {
        return {
          drinks: db.drinks.sort((a, b) => a.name < b.name ? 0 : 1),
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
      />
    );
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({
          allDrinks: data.drinks,
          networkError: {
            showError: false,
            message: '',
          }
        });
      })
      .catch((err) => {
        this.setState({
          allDrinks: [],
          networkError: {
            message: err.message,
            showError: true,
          },
        });
      });
  }

  private applyDrinkFilter = (term: string) => {
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
