import random from 'lodash/fp/random';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
import {
  fetchAllPokemons,
  fetchMe,
  fetchTrainerPokemons,
  addTrainerPokemon,
  updateMe,
} from 'Services/api';

import Header from './Header';
import Tree from './Tree';
import Pokedex from './Pokedex';
import PlayGround from './PlayGround';
import Trainer from './Trainer';

function Forest() {
  const [user, setUser] = useState(null);
  const [forestPokemon, setForestPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [trainerPokemonList, setTrainerPokemonList] = useState(null);

  function selectRandomPokemon(pokemons) {
    const randomIndex = random(0, pokemons.length);
    setForestPokemon(pokemons[randomIndex]);
  }

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchMe();
      const list = await fetchAllPokemons();
      const trainersList = await fetchTrainerPokemons();

      setUser(userData);
      setPokemonList(list);
      selectRandomPokemon(list);
      setTrainerPokemonList(trainersList);
    }
    fetchData();
  }, []);

  async function onCatch() {
    if (isCaught()) {
      await addTrainerPokemon(user.id, forestPokemon.pid);
      setTrainerPokemonList(list => [...list, forestPokemon]);
    }

    selectRandomPokemon(pokemonList);
  }

  async function onTrainerUpdate(data) {
    await updateMe(data);
    setUser(prevState => ({ ...prevState, ...data }));
  }

  if (!pokemonList || !forestPokemon || !user || !trainerPokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header pokemonsLength={pokemonList.length} pokemonName={forestPokemon.name} />
      <ForestContainer>
        <Tree />

        <PlayGround pokemon={forestPokemon} onCatch={onCatch} />

        <Tree />
      </ForestContainer>

      <TrainerContainer>
        <Trainer name={user.name} imageUrl={user.imageUrl} onTrainerUpdate={onTrainerUpdate} />
        <Pokedex css={{ marginLeft: '50px' }} pokemonList={trainerPokemonList} />
      </TrainerContainer>
    </div>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

const TrainerContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
