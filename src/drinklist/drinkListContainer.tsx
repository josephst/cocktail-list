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
    fetch('/api/drinks/')
      .then((res) => res.json())
      .then((drinkList) => this.setState({ drinks: drinkList }));
  }
}

export { DrinkListContainer };
