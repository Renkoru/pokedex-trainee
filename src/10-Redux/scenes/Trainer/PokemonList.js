import React from 'react';
import styled from '@emotion/styled';
import isEmpty from 'lodash/isEmpty';

import { connect } from 'react-redux';

import {
  poketAdd,
  poketRemove,
  removePokemon,
} from '../../store/actions';
import { removeTrainerPokemon } from 'Services/api';

import Pokemon from './Pokemon';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

function PokemonList({
  pokemons,
  trainerPokemons,
  removePokemon,
  profile,
  poket,
  poketAdd,
  poketRemove,
}) {
  if (isEmpty(pokemons)) {
    return <div>Zero pokemons.</div>;
  }

  const myPokemons = trainerPokemons.map(tpokemon => {
    const pokemon = pokemons.find(({ pid }) => pid === tpokemon.pid);

    return { ...tpokemon, imageUrl: pokemon.imageUrl };
  });

  const onRemove = removeId => {
    removeTrainerPokemon(profile.id, removeId).then(() =>
      removePokemon(removeId),
    );
  };

  const onItemClick = id => {
    const found = poket.find(pokemonId => pokemonId === id);
    if (found) {
      poketRemove(id);
      return;
    }
    poketAdd(id);
  };

  return (
    <ListContainer>
      {myPokemons.map((pokemon, index) => {
        const isActive = !!poket.find(id => pokemon.id === id);
        return (
          <Pokemon
            /* key={index} */
            key={pokemon.id}
            {...pokemon}
            onRemove={onRemove}
            onClick={onItemClick}
            isActive={isActive}
          />
        );
      })}
    </ListContainer>
  );
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    poket: state.poket,
    pokemons: state.allPokemons,
    trainerPokemons: state.trainerPokemons,
  };
};

const mapDispatchToProps = dispatch => ({
  poketAdd: id => dispatch(poketAdd(id)),
  poketRemove: id => dispatch(poketRemove(id)),
  removePokemon: id => dispatch(removePokemon(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
