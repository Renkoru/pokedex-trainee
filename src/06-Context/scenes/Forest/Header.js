import React from 'react';

import Title from 'Shared/Title';

function Header({ total, pokemonName }) {
  return (
    <div>
      <Title>You are in the forest</Title>
      <Title type="subtitle">
        Here are &nbsp;
        {total}
        &nbsp; pokemons. You met &nbsp;
        <b>{pokemonName}</b>
        &nbsp;
      </Title>
    </div>
  );
}

export default Header;
