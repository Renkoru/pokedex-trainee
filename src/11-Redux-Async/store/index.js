import { createStore, combineReducers, applyMiddleware } from 'redux';

import trainer from './trainerReducer';
import main from './mainReducer';

import { loggerMiddleware, asyncMiddleware } from './middlewares';

const reducer = combineReducers({ main, trainer });

export default createStore(
  reducer,
  applyMiddleware(loggerMiddleware, asyncMiddleware),
);
