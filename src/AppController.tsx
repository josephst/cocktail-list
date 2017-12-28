import * as React from 'react';

// DEBUG
import { makeDrink } from './fixtures';

import { Drink } from './typings/drink';

interface AppState {
  drinks: Drink[];
  categories: string[];
}

class AppController extends React.Component<AppState, {}> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      drinks: [],
      categories: [],
    };
  }

  componentDidMount() {
    const drinks = [0, 1, 2, 3, 4].map(i => makeDrink(i));
    this.setState({ drinks });
  }
}

export { AppController };
