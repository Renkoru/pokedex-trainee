import React from 'react';

import Title from 'Shared/Title';

function Header({ pokemonsLength, pokemonName }) {
  return (
    <div>
      <Title>You are in the forest</Title>
      <Title type="subtitle">
        Here are &nbsp;
        {pokemonsLength}
        &nbsp; pokemons. You met &nbsp;
        <b>{pokemonName}</b>
        &nbsp;
      </Title>
    </div>
  );
}

export default Header;
