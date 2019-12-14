import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducer';

function loggerMiddleware({ getState, dispatch }) {
  return next => action => {
    const prevState = getState();

    const result = next(action);

    console.log('\n>>>>>> Log');
    console.log(action);
    console.log(prevState);
    console.log(getState());
    console.log(result.meta.counter);

    return result;
  };
}

let counter = 0;
function counterMiddleware({ getState, dispatch }) {
  return next => action => {
    counter += 1;
    const result = next(action);

    return {
      ...result,
      meta: {
        counter,
      },
    };
  };
}

function asyncActions({ dispatch }) {
  return next => action => {
    if (typeof action !== 'function') {
      return next(action);
    }

    return action(dispatch);
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(asyncActions, loggerMiddleware, counterMiddleware)),
);

export default store;
