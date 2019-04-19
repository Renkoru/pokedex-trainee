import React, { useState, useContext } from 'react';

const store = {
  trainerPokemons: [],
  allPokemons: [],
  profile: {
    id: 8,
    name: 'Ash',
  },
  pocket: [],
};

const PokemonsContext = React.createContext({
  ...store,
});

export function PokemonProvider({ children }) {
  const [trainerPokemons, setTrainerPokemons] = useState(
    store.trainerPokemons,
  );
  const [allPokemons, setAllPokemons] = useState(store.allPokemons);
  const [pocket, setPocket] = useState(store.pocket);

  const removePokemon = removeId => {
    const newList = trainerPokemons.filter(
      ({ id }) => id !== removeId,
    );
    setTrainerPokemons(newList);
  };

  const onPocketAdd = id => {
    setPocket([...pocket, id]);
  };

  const onPocketRemove = rid => {
    setPocket(pocket.filter(id => id !== rid));
  };

  const dispatch = action => {
    switch (action.type) {
      case 'POCKET_ADD':
        onPocketAdd(action.payload);
        break;
      case 'POCKET_REMOVE':
        onPocketRemove(action.payload);
        break;
      default:
        break;
    }
  };

  const contextValue = {
    profile: store.profile,
    pocket,
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
      pocket,
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
        pocket={pocket}
        dispatch={dispatch}
        {...props}
      />
    );
  }

  return WrappedComponent;
}

export default store;
