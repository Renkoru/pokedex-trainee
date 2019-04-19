import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { connect } from 'react-redux';

import { isCaught, getRandomId } from 'Services/pokemon';
import { addTrainerPokemon } from 'Services/api';
import Container from 'Components/Container';
import Flex from 'Components/Flex';
import Button from 'Components/Button';

import { setTrainerPokemons } from '../../store/actions';
import Pokemon from './Pokemon';
import Trainer from './Trainer';

const Message = styled.h2`
  text-align: center;
  font-size: 26px;
  color: white;
  background-color: #00b89c;
`;

function Garden({
  profile,
  pokemons,
  trainerPokemons,
  setTrainerPokemons,
}) {
  const [pokemonId, setPokemon] = useState(getRandomId());
  const [showMessage, setMessage] = useState(null);

  const addPokemon = pokemonId => {
    // const pokemonData = pokemons.find(({ pid }) => pid === pokemonId);
    addTrainerPokemon(profile.id, pokemonId).then(newPokemon =>
      setTrainerPokemons([...trainerPokemons, newPokemon]),
    );
  };

  const onFight = () => {
    if (!isCaught()) {
      setPokemon(getRandomId());
      return;
    }
    setMessage('Caught!');

    window.setTimeout(() => {
      setMessage(null);
      setPokemon(getRandomId());
    }, 1000);

    addPokemon(pokemonId);
    return;
  };

  const onSkip = () => {
    setPokemon(getRandomId());
  };

  return (
    <Container>
      <Flex>
        <Trainer onFight={onFight} />

        <Flex column css={css({ marginLeft: '160px' })}>
          <Message>{showMessage}</Message>
          <Pokemon pid={pokemonId} />
          <Button onClick={onSkip}>Escape -&gt;</Button>
        </Flex>
      </Flex>
    </Container>
  );
}

const mapStateToProps = state => ({
  pokemons: state.allPokemons,
  trainerPokemons: state.trainerPokemons,
  profile: state.profile,
});
const mapDispatchToProps = dispatch => ({
  setTrainerPokemons: pokemons =>
    dispatch(setTrainerPokemons(pokemons)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Garden);
