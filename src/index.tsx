import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

import App from './App';
import { DrinkStore } from './stores';
import { TransportLayer } from './controllers';
import registerServiceWorker from './registerServiceWorker';

const drinkStore = new DrinkStore(new TransportLayer());

ReactDOM.render(<App drinkStore={drinkStore} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
