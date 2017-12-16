import * as React from 'react';

import { DrinkList } from './drinkList';
import { Drink } from './drink';

export interface DrinkListState {
  drinks: Drink[];
}

class DrinkListContainer extends React.Component<{}, DrinkListState> {
  constructor(props: {}) {
    super(props);
    this.state = { drinks: [] };
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/db.json`)
      .then(res => res.json())
      .then((res: { drinks: Drink[] }) =>
        this.setState({ drinks: res.drinks })
      );
  }

  render() {
    return <DrinkList drinks={this.state.drinks} />;
  }
}

export { DrinkListContainer };
