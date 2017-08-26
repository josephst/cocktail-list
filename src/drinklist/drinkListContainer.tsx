import * as React from 'react';

import { DrinkList } from './drinkList';

import { Drink } from './drink';

class DrinkListContainer extends React.Component<{}, { drinks: Drink[] }> {
  constructor() {
    super();
    this.state = {
      drinks: [],
    };
  }

  render() {
    return (
      <DrinkList drinks={this.state.drinks} />
    );
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/db.json`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error('Error occured while fetching list of drinks');
      })
      .then((res) => res.json())
      .then((db) => this.setState({ drinks: db.drinks }))
      .catch((err) => console.log(err));
  }
}

export { DrinkListContainer };
