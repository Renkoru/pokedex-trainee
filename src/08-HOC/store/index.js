import React, { useState, useContext } from 'react';

const store = {
  trainerPokemons: [],
  allPokemons: [],
  profile: {
    id: 8,
    name: 'Ash',
  },
  poket: [],
};

const PokemonsContext = React.createContext({
  ...store,
});

export function PokemonProvider({ children }) {
  const [trainerPokemons, setTrainerPokemons] = useState(
    store.trainerPokemons,
  );
  const [allPokemons, setAllPokemons] = useState(store.allPokemons);
  const [poket, setPoket] = useState(store.poket);

  const removePokemon = removeId => {
    const newList = trainerPokemons.filter(
      ({ id }) => id !== removeId,
    );
    setTrainerPokemons(newList);
  };

  const onPoketAdd = id => {
    setPoket([...poket, id]);
  };

  const onPoketRemove = rid => {
    setPoket(poket.filter(id => id !== rid));
  };

  const dispatch = action => {
    switch (action.type) {
      case 'POKET_ADD':
        onPoketAdd(action.payload);
        break;
      case 'POKET_REMOVE':
        onPoketRemove(action.payload);
        break;
      default:
        break;
    }
  };

  const contextValue = {
    profile: store.profile,
    poket,
    trainerPokemons,
    pokemons: allPokemons,
    setTrainerPokemons,
    setAllPokemons,
    removePokemon,
    dispatch,
  };

  return (
    <PokemonsContext.Provider value={contextValue}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function withPokemons(Component) {
  function WrappedComponent(props) {
    const {
      pokemons,
      trainerPokemons,
      setAllPokemons,
      setTrainerPokemons,
      removePokemon,
      profile,
      poket,
      dispatch,
    } = useContext(PokemonsContext);

    return (
      <Component
        pokemons={pokemons}
        trainerPokemons={trainerPokemons}
        setAllPokemons={setAllPokemons}
        setTrainerPokemons={setTrainerPokemons}
        removePokemon={removePokemon}
        profile={profile}
        poket={poket}
        dispatch={dispatch}
        {...props}
      />
    );
  }

  return WrappedComponent;
}

export default store;
