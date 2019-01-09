import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import * as modules from './modules';
import rootSaga from './sagas';

const reducers = combineReducers(modules);

const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && composeWithDevTools;
const composeEnhancers: any = devTools || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

const configure = (preloadedState?: any) => {
  const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));

  sagaMiddleware.run(rootSaga);
  return store;
}

export default configure;
