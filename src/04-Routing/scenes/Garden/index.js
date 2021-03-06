import React from 'react';
import axios from 'axios';
import { css } from '@emotion/core';

import { isCaught, getRandomId } from 'Services/pokemon';
import Container from 'Components/Container';
import Flex from 'Components/Flex';

import Pokemon from './Pokemon';
import Trainer from './Trainer';

class Garden extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonId: getRandomId(),
      allPokemons: [],
    };

    this.onFight = this.onFight.bind(this);
  }

  componentDidMount() {
    axios.get('/api/v1/pokemons').then(result =>
      this.setState({
        allPokemons: result.data,
      }),
    );
  }

  changePokemon() {
    this.setState({ pokemonId: getRandomId() });
  }

  addPokemon(pokemonId) {
    const pokemonData = this.state.allPokemons.find(
      ({ id }) => id === pokemonId,
    );
    this.props.setTrainerPokemons([
      ...this.props.trainerPokemons,
      pokemonData,
    ]);
  }

  onFight() {
    if (isCaught()) {
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
