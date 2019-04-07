import React from 'react';
import { css } from '@emotion/core';

import { isCought, getRandomId } from 'Services/pokemon';
import Container from 'Components/Container';
import Flex from 'Components/Flex';

import Pokemon from './Pokemon';
import Trainer from './Trainer';

class Garden extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonId: getRandomId(),
    };

    this.onFight = this.onFight.bind(this);
  }

  changePokemon() {
    this.setState({ pokemonId: getRandomId() });
  }

  addPokemon(pokemonId) {
    const pokemonData = this.props.allPokemons.find(
      ({ id }) => id === pokemonId,
    );
    this.props.setTrainerPokemons([
      ...this.props.trainerPokemons,
      pokemonData,
    ]);
  }

  onFight() {
    if (isCought()) {
      this.addPokemon(this.state.pokemonId);
    }

    this.changePokemon();
  }

  render() {
    return (
      <Container>
        <Flex>
          <Trainer
            onFight={this.onFight}
            pokemons={this.props.trainerPokemons}
          />

          <Pokemon
            pid={this.state.pokemonId}
            css={css({ marginLeft: '160px' })}
          />
        </Flex>
      </Container>
    );
  }
}

export default Garden;
