import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { State } from './state';
import rootReducer from './reducer';
import rootSaga from './saga';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const store = createStore<State, any, {}, {}>(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return {
    store,
  };
};
