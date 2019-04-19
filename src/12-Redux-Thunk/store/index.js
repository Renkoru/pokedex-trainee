import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import trainer from './trainerReducer';
import main from './mainReducer';

import { loggerMiddleware } from './middlewares';

const reducer = combineReducers({ main, trainer });

export default createStore(
  reducer,
  applyMiddleware(loggerMiddleware, thunk),
);
