import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './history';

// custom module imports
import './index.css';
import store from './redux/store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const WS_URL = process.env.REACT_APP_WS_ROOT;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ActionCableProvider url={WS_URL}>
        <App />
      </ActionCableProvider>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
