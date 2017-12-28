import * as React from 'react';
import { match } from 'react-router';

interface DrinkListRouteProps {
  match: match<{}>;
}

class DrinkList extends React.Component<DrinkListRouteProps, {}> {
  constructor(props: DrinkListRouteProps) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.match && this.props.match.path === '/favorites') {
      return <div>Favorite Drink List</div>;
    } else {
      return <div>Non-Favorite Drink List</div>;
    }
  }
}

export { DrinkList };
