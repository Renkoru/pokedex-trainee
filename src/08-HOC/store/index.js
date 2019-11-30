import React, { useReducer, useContext, useState } from 'react';

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

export function withDispatchLog(Component) {
  function WrapperComponent(props) {
    const [timestamp, setTimestamp] = useState(new Date());
    const { dispatch: originalDispatch, ...rest } = props;
    const resultProps = rest;

    if (originalDispatch) {
      rest.dispatch = action => {
        const now = new Date();
        console.log(action, (now - timestamp) / 1000);
        setTimestamp(now);

        originalDispatch(action);
      };
    }

    return <Component {...resultProps} />;
  }

  return WrapperComponent;
}

export function connect(mapStateToProps, mapDispatchToProps) {
  function HOC(Component) {
    function WrapperComponent(props) {
      const { dispatch, ...state } = useStore();

      const storeProps = mapStateToProps(state);
      const dispatchProps = mapDispatchToProps(dispatch);

      return <Component {...props} {...storeProps} {...dispatchProps} dispatch={dispatch} />;
    }

    return WrapperComponent;
  }

  return HOC;
}

export default StoreProvider;
