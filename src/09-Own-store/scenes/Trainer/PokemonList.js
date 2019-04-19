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
  profile,
  poket,
  poketAdd,
  poketRemove,
}) {
  if (isEmpty(pokemons)) {
    return null;
  }

  const myPokemons = trainerPokemons.map(tpokemon => {
    const pokemon = pokemons.find(({ pid }) => pid === tpokemon.pid);

    return { ...tpokemon, imageUrl: pokemon.imageUrl };
  });

  const onChange = newPokemon => {};

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
    <PokemonList
      pokemons={myPokemons}
      activeList={poket}
      onChange={onChange}
      onRemove={onRemove}
      onItemClick={onItemClick}
    />
  );
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    poket: state.poket,
    pokemons: state.pokemons,
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
)(PokemonListContainer);
