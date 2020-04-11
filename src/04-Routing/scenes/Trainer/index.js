import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import {
  fetchAllPokemons,
  fetchMe,
  fetchTrainerPokemons,
} from 'Shared/services/api';

import { updateTrainerPokemons } from 'Shared/services/pokemon';
import Pokedex from 'Shared/Pokedex';

import Trainer from './Trainer';

function TrainerScene() {
  const [user, setUser] = useState(null);
  const [trainerPokemonList, setTrainerPokemonList] = useState(null);
  const [pokemonList, setPokemonList] = useState(null); // TODO: Lifting state up

  useEffect(() => {
    async function fetchData() {
      const list = await fetchAllPokemons();
      const userData = await fetchMe();
      const trainersList = await fetchTrainerPokemons();

      setPokemonList(list);
      setUser(userData);
      setTrainerPokemonList(
        updateTrainerPokemons({
          trainerPokemonList: trainersList,
          pokemonList: list,
        }),
      );
    }
    fetchData();
  }, []);

  if (!user || !trainerPokemonList || !pokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <TrainerContainer>
      <Trainer name={user.name} imageUrl={user.imageUrl} />
      <Pokedex css={{ marginLeft: '50px' }} pokemonList={trainerPokemonList} />
    </TrainerContainer>
  );
}

const TrainerContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default TrainerScene;
