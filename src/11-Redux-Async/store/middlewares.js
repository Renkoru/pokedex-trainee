export const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('New state:', store.getState());

  return result;
};

export const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};
