import React, { useState, useEffect } from 'react';

import { PokemonsContext } from './context';
import { getPokemons } from 'Services/api';

export function PokemonProvider({ children }) {
  const [trainerPokemons, setTrainerPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then(pokemons => setAllPokemons(pokemons));
  }, []);

  const contextValue = {
    trainerPokemons,
    setTrainerPokemons,
    pokemons: allPokemons,
  };

  return (
    <PokemonsContext.Provider value={contextValue}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function connectToProvider() {}

// export PokemonProvider;
