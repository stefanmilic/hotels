import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
// If you use react-router, don't forget to pass in your history type.

// Import the state interface and our combined reducers/sagas.
import { State } from './state';
import rootReducer from './reducer';
import rootSaga from './saga';

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeWithDevTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers);

  const composedReducer = rootReducer;

  const store = createStore<State, any, {}, {}>(
    composedReducer,
    composedEnhancers,
  );

  sagaMiddleware.run(rootSaga);

  return {
    store,
  };
};
