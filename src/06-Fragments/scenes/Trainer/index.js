import React from 'react';
import styled from '@emotion/styled';
import isEmpty from 'lodash/isEmpty';

import Container from 'Components/Container';

import Pokemon from './Pokemon';

const Header = styled.h2`
  text-align: center;
  font-size: 26px;
`;

function PokemonList({ pokemons, onChange }) {
  if (isEmpty(pokemons)) {
    return <Header>Zero pokemons.</Header>;
  }

  const amount = pokemons.length;

  return (
    <div>
      <Header>
        {amount ? `My Pokemons (${amount}):` : 'My Pokemons:'}
      </Header>
      {pokemons.map((pokemon, id) => (
        <Pokemon key={id} {...pokemon} onChange={onChange} />
      ))}
    </div>
  );
}

function Trainer({ pokemons, setTrainerPokemons }) {
  let myPokemons = pokemons;

  if (pokemons.length === 0) {
    myPokemons = [
      {
        id: 9,
        name: 'My Poke',
        weight: 23,
      },
      ...pokemons,
    ];
    setTrainerPokemons(myPokemons);
  }

  const onChange = newPokemon => {
    const newList = myPokemons.map(pokemon => {
      if (pokemon.id === newPokemon.id) {
        return newPokemon;
      }

      return pokemon;
    });

    setTrainerPokemons(newList);
  };

  return (
    <Container>
      <PokemonList pokemons={myPokemons} onChange={onChange} />
    </Container>
  );
}

Trainer.defaultProps = {
  pokemons: [],
};

export default Trainer;
