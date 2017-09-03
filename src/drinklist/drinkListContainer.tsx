import * as React from 'react';

import { DrinkList } from './drinkList';

import { Drink, Ingredient } from './drink';

export interface DrinkListShared {
  drinks: Drink[];
  ingredients: Ingredient[];
  networkError: {
    showError: boolean;
    message: string;
  };
}

interface DrinkListContainerState extends DrinkListShared { }

class DrinkListContainer extends React.Component<{}, DrinkListContainerState> {
  constructor() {
    super();
    this.state = {
      drinks: [],
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
      <DrinkList
        drinks={this.state.drinks}
        ingredients={this.state.ingredients}
        networkError={this.state.networkError}
        hideNetworkError={this.hideNetworkError}
      />
    );
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({
          drinks: data.drinks,
          ingredients: data.ingredients,
          networkError: {
            showError: false,
            message: '',
          }
        });
      })
      .catch((err) => {
        this.setState({
          drinks: [],
          ingredients: [],
          networkError: {
            message: err.message,
            showError: true,
          },
        });
      });
  }
}

export { DrinkListContainer };
