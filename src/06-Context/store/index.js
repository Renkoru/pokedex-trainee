import uuid from 'uuid/v4';

import React, { useState, useContext, useCallback, useMemo } from 'react';

function getInitialStore() {
  return {
    user: null,
    pokemonList: null,
    _trainerPokemonList: null,
    bagPokemonList: [],
    notifications: [],
  };
}

export const StoreContext = React.createContext({});

function StoreProvider({ children }) {
  const [store, setStore] = useState(getInitialStore());

  const onBagAdd = useCallback(
    pokemon =>
      setStore(prevStore => ({
        ...prevStore,
        bagPokemonList: [...prevStore.bagPokemonList, pokemon],
      })),
    [setStore],
  );

  const addNotification = useCallback(
    notification =>
      setStore(prevStore => ({
        ...prevStore,
        notifications: [...prevStore.notifications, { ...notification, id: uuid() }],
      })),
    [setStore],
  );

  const removeNotification = useCallback(
    id =>
      setStore(prevStore => ({
        ...prevStore,
        notifications: prevStore.notifications.filter(({ id: listId }) => listId !== id),
      })),
    [setStore],
  );

  const setUser = useCallback(
    user =>
      setStore(prevStore => ({
        ...prevStore,
        user,
      })),
    [setStore],
  );

  const setPokemons = useCallback(
    pokemonList =>
      setStore(prevStore => ({
        ...prevStore,
        pokemonList,
      })),
    [setStore],
  );

  const setTrainerPokemonList = useCallback(
    _trainerPokemonList =>
      setStore(prevStore => ({
        ...prevStore,
        _trainerPokemonList,
      })),
    [setStore],
  );

  const addTrainerPokemon = useCallback(
    pokemon =>
      setStore(prevStore => ({
        ...prevStore,
        _trainerPokemonList: [...prevStore._trainerPokemonList, pokemon],
      })),
    [setStore],
  );

  const removeTrainerPokemon = useCallback(
    id =>
      setStore(prevStore => ({
        ...prevStore,
        _trainerPokemonList: prevStore._trainerPokemonList.filter(
          ({ id: listId }) => listId !== id,
        ),
      })),
    [setStore],
  );

  const trainerPokemonList = useMemo(() => {
    if (!store._trainerPokemonList || !store.pokemonList) {
      return null;
    }

    return store._trainerPokemonList.map(trainerPokemon => {
      const pokemon = store.pokemonList.find(({ pid }) => pid === trainerPokemon.pid);
      return { ...trainerPokemon, imageUrl: pokemon.imageUrl };
    });
  }, [store._trainerPokemonList, store.pokemonList]);

  return (
    <StoreContext.Provider
      value={{
        ...store,
        onBagAdd,
        addNotification,
        removeNotification,
        setUser,
        setPokemons,
        setTrainerPokemonList,
        trainerPokemonList,
        addTrainerPokemon,
        removeTrainerPokemon,
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
