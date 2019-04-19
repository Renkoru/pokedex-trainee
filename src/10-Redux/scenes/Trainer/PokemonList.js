import React from 'react';
import styled from '@emotion/styled';
import isEmpty from 'lodash/isEmpty';

import { connect } from 'react-redux';

import {
  pocketAdd,
  pocketRemove,
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
  pocket,
  pocketAdd,
  pocketRemove,
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
    const found = pocket.find(pokemonId => pokemonId === id);
    if (found) {
      pocketRemove(id);
      return;
    }
    pocketAdd(id);
  };

  return (
    <ListContainer>
      {myPokemons.map((pokemon, index) => {
        const isActive = !!pocket.find(id => pokemon.id === id);
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
    pocket: state.pocket,
    pokemons: state.allPokemons,
    trainerPokemons: state.trainerPokemons,
  };
};

const mapDispatchToProps = dispatch => ({
  pocketAdd: id => dispatch(pocketAdd(id)),
  pocketRemove: id => dispatch(pocketRemove(id)),
  removePokemon: id => dispatch(removePokemon(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
