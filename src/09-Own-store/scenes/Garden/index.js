import React, { useState } from 'react';
import { css } from '@emotion/core';

import { isCought, getRandomId } from 'Services/pokemon';
import { addTrainerPokemon } from 'Services/api';
import Container from 'Components/Container';
import Flex from 'Components/Flex';

import { connect } from '../../store';
import Pokemon from './Pokemon';
import Trainer from './Trainer';

function Garden({
  profile,
  pokemons,
  trainerPokemons,
  setTrainerPokemons,
}) {
  const [pokemonId, setPokemon] = useState(getRandomId());

  const addPokemon = pokemonId => {
    // const pokemonData = pokemons.find(({ pid }) => pid === pokemonId);
    addTrainerPokemon(profile.id, pokemonId).then(newPokemon =>
      setTrainerPokemons([...trainerPokemons, newPokemon]),
    );
  };

  const onFight = () => {
    // fix typo isCought -> isCaught
    if (isCought()) {
      console.log('Caught!');
      addPokemon(pokemonId);
    }

    setPokemon(getRandomId());
  };

  return (
    <Container>
      <Flex>
        <Trainer onFight={onFight} />

        <Pokemon pid={pokemonId} css={css({ marginLeft: '160px' })} />
      </Flex>
    </Container>
  );
}

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  trainerPokemons: state.trainerPokemons,
  profile: state.profile,
  setTrainerPokemons: state.setTrainerPokemons,
});
export default connect(mapStateToProps)(Garden);
