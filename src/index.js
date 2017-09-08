import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// custom module imports
import './index.css';
import store from './redux/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
