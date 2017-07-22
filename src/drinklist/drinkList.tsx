import { Component } from 'react';
import * as React from 'react';

interface DrinkListProps { }
interface DrinkListState {
  // tslint:disable-next-line:no-any
  drinks: any[];
}

class DrinkList extends Component<DrinkListProps, DrinkListState> {
  constructor() {
    super();
    this.state = {
      drinks: [],
    };
  }
  render() {
    return (
      <div>
        Drink list
        {JSON.stringify(this.state.drinks)}
      </div>
    );
  }
  componentDidMount() {
    fetch('/api/drinks/')
      // tslint:disable-next-line:no-console
      .then((res) => { console.log(res); return res; })
      .then((res) => res.json())
      .then((drinkList) => this.setState({ drinks: drinkList }));
  }
}

export { DrinkList };