import React from 'react';
import styled from '@emotion/styled';
import isEmpty from 'lodash/isEmpty';

import { withPokemons } from '../../store';
import { removeTrainerPokemon } from 'Services/api';

import Pokemon from './Pokemon';

const Header = styled.h2`
  text-align: center;
  font-size: 26px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

function PokemonList({
  pokemons,
  onChange,
  onRemove,
  onItemClick,
  activeList,
  ...rest
}) {
  if (isEmpty(pokemons)) {
    return <Header>Zero pokemons.</Header>;
  }

  const amount = pokemons.length;

  return (
    <div>
      <Header>
        {amount ? `My Pokemons (${amount}):` : 'My Pokemons:'}
      </Header>
      <ListContainer>
        {pokemons.map((pokemon, index) => {
          const isActive = !!activeList.find(id => pokemon.id === id);
          return (
            <Pokemon
              /* key={index} */
              key={pokemon.id}
              {...pokemon}
              onChange={onChange}
              onRemove={onRemove}
              onClick={onItemClick}
              isActive={isActive}
              {...rest}
            />
          );
        })}
      </ListContainer>
    </div>
  );
}

function PokemonListContainer({
  pokemons,
  trainerPokemons,
  removePokemon,
  setTrainerPokemons,
  profile,
  poket,
  onPoketAdd,
  onPoketRemove,
  dispatch,
}) {
  if (isEmpty(pokemons)) {
    return null;
  }

  const myPokemons = trainerPokemons.map(tpokemon => {
    const pokemon = pokemons.find(({ pid }) => pid === tpokemon.pid);

    return { ...tpokemon, imageUrl: pokemon.imageUrl };
  });

  const onChange = newPokemon => {
    const newList = trainerPokemons.map(pokemon => {
      if (pokemon.pid === newPokemon.pid) {
        return newPokemon;
      }

      return pokemon;
    });

    setTrainerPokemons(newList);
  };

  const onRemove = removeId => {
    removeTrainerPokemon(profile.id, removeId).then(() =>
      removePokemon(removeId),
    );
  };

  const onItemClick = id => {
    const found = poket.find(pokemonId => pokemonId === id);
    if (found) {
      dispatch({ type: 'POKET_REMOVE', payload: id });
      // onPoketRemove(id);
      return;
    }
    // onPoketAdd(id);
    dispatch({ type: 'POKET_ADD', payload: id });
  };

  return (
    <PokemonList
      pokemons={myPokemons}
      activeList={poket}
      onChange={onChange}
      onRemove={onRemove}
      onItemClick={onItemClick}
    />
  );
}

export default withPokemons(PokemonListContainer);
