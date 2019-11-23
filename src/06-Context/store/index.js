import uuid from 'uuid/v4';

import React, { useState, useContext } from 'react';

function getInitialStore() {
  return {
    bagPokemonList: [],
    notifications: [],
  };
}

export const StoreContext = React.createContext({});

function StoreProvider({ children }) {
  const [store, setStore] = useState(getInitialStore());

  function onBagAdd(pokemon) {
    return setStore(prevStore => ({
      ...prevStore,
      bagPokemonList: [...prevStore.bagPokemonList, pokemon],
    }));
  }

  function addNotification(notification) {
    return setStore(prevStore => ({
      ...prevStore,
      notifications: [...prevStore.notifications, { ...notification, id: uuid() }],
    }));
  }

  function removeNotification(id) {
    return setStore(prevStore => ({
      ...prevStore,
      notifications: prevStore.notifications.filter(({ id: listId }) => listId !== id),
    }));
  }

  return (
    <StoreContext.Provider value={{ ...store, onBagAdd, addNotification, removeNotification }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);

  return store;
}

export default StoreProvider;
