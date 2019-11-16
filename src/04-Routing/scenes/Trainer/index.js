import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { fetchMe, fetchTrainerPokemons, updateMe } from 'Services/api';

import Trainer from './Trainer';
import Pokedex from './Pokedex';

function TrainerScene() {
  const [user, setUser] = useState(null);
  const [trainerPokemonList, setTrainerPokemonList] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchMe();
      const trainersList = await fetchTrainerPokemons();

      setUser(userData);
      setTrainerPokemonList(trainersList);
    }
    fetchData();
  }, []);

  async function onTrainerUpdate(data) {
    await updateMe(data);
    setUser(prevState => ({ ...prevState, ...data }));
  }

  if (!user || !trainerPokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <TrainerContainer>
      <Trainer name={user.name} imageUrl={user.imageUrl} onTrainerUpdate={onTrainerUpdate} />
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
