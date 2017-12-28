import * as React from 'react';

// import { DrinkList } from './drinkList';
// import { CategorySwitcher } from './categorySwitcher';
import { TabViewController } from './tabViewController';
import { Drink } from './drink';

export interface DrinkListState {
  drinks: Drink[];
  loading: boolean;
  drinksInCategory: Drink[];
}

class DrinkListContainer extends React.Component<{}, DrinkListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      drinks: [],
      loading: true,
      drinksInCategory: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/db.json`)
      .then(res => res.json())
      .then((res: { drinks: Drink[] }) =>
        this.setState({
          drinks: res.drinks,
          drinksInCategory: res.drinks,
          loading: false,
        })
      );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <TabViewController drinks={this.state.drinks} />
          {/* <DrinkList drinks={this.state.drinksInCategory} /> */}
        </div>
      );
    }
  }
}

export { DrinkListContainer };
