import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { fetchMe, fetchTrainerPokemons, updateMe } from 'Services/api';

import Trainer from './Trainer';
import Pokedex from './Pokedex';
import Bag from './Bag';

function TrainerScene({ bagPokemonList, onBagAdd }) {
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

  function onPokemonSelect(id) {
    const bagPokemon = bagPokemonList.find(({ id: pokemonId }) => pokemonId === id);
    if (bagPokemon) {
      return;
    }
    const selectedPokemon = trainerPokemonList.find(({ id: pokemonId }) => pokemonId === id);

    onBagAdd(selectedPokemon);
  }

  if (!user || !trainerPokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <TrainerContainer>
      <Trainer name={user.name} imageUrl={user.imageUrl} onTrainerUpdate={onTrainerUpdate} />
      <div>
        <Pokedex
          css={{ marginLeft: '50px' }}
          pokemonList={trainerPokemonList}
          onClick={onPokemonSelect}
        />
        <Bag css={{ marginTop: '50px', marginLeft: '50px' }} pokemonList={bagPokemonList} />
      </div>
    </TrainerContainer>
  );
}

const TrainerContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default TrainerScene;
