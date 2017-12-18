import * as React from 'react';
import { PageHeader } from 'react-bootstrap';

import { DrinkListContainer } from './drinklist/drinkListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>Cocktails</PageHeader>
        <DrinkListContainer />
      </div>
    );
  }
}

export default App;
