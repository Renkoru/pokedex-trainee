import React, { useState, useContext } from 'react';
import { createStore } from 'redux';

import trainerReducer from './reducer';

const store = {
  trainerPokemons: [],
  allPokemons: [],
  profile: {
    id: 8,
    name: 'Ash',
  },
};

const PokemonsContext = React.createContext({
  ...store,
});

export function PokemonProvider({ children }) {
  const [trainerPokemons, setTrainerPokemons] = useState(
    store.trainerPokemons,
  );
  const [allPokemons, setAllPokemons] = useState(store.allPokemons);

  const removePokemon = removeId => {
    const newList = trainerPokemons.filter(
      ({ id }) => id !== removeId,
    );
    setTrainerPokemons(newList);
  };

  const contextValue = {
    profile: store.profile,
    trainerPokemons,
    pokemons: allPokemons,
    setTrainerPokemons,
    setAllPokemons,
    removePokemon,
  };

  return (
    <PokemonsContext.Provider value={contextValue}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function connect(
  mapStateToProps = () => ({}),
  mapDispatchToProps = () => ({}),
) {
  return Component => {
    function WrappedComponent(props) {
      const context = useContext(PokemonsContext);
      const stateProps = mapStateToProps(context);
      const dispatchProps = mapDispatchToProps(context.dispatch);

      return (
        <Component {...props} {...stateProps} {...dispatchProps} />
      );
    }

    return WrappedComponent;
  };
}

const rstore = createStore(trainerReducer);

export default rstore;
