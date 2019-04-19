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
  pocket,
  pocketAdd,
  pocketRemove,
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
    const found = pocket.find(pokemonId => pokemonId === id);
    if (found) {
      pocketRemove(id);
      return;
    }
    pocketAdd(id);
  };

  return (
    <PokemonList
      pokemons={myPokemons}
      activeList={pocket}
      onChange={onChange}
      onRemove={onRemove}
      onItemClick={onItemClick}
    />
  );
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    pocket: state.pocket,
    pokemons: state.pokemons,
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
)(PokemonListContainer);
