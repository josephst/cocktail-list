import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import { DrinkStore } from './stores/drinkStore';
import { Home } from './routes';

interface IAppProps {
  drinkStore: DrinkStore;
}

@observer
class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <Provider drinkStore={this.props.drinkStore}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
