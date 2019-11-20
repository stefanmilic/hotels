import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './setupProxy';
//import { createStore } from 'redux';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/main.scss';
import configureStore from './state/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import rootReduce from './state/hotels/reducer';
const { store } = configureStore();
// const store = createStore(rootReduce);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
