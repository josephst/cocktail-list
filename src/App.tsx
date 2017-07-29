import * as React from 'react';
import './App.css';

import { DrinkList } from './drinklist/drinkList';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cocktails</h2>
        </div>
        <p className="App-intro">
          Intro.
        </p>
        <DrinkList />
      </div>
    );
  }
}

export default App;
