import React, { useReducer, useContext } from 'react';

import reducer, { getInitialState } from './reducer';

export const StoreContext = React.createContext({});

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  return (
    <StoreContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);

  return store;
}

export default StoreProvider;
