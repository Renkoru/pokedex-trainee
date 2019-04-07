import React, { useState } from 'react';
import styled from '@emotion/styled';

import Button from 'Components/Button';

import Pokeball from './Pokeball';
import PokemonList from './PokemonList';

const CatcherContainer = styled.div`
  text-align: center;
  width: 200px;
`;

function Trainer({ onFight, pokemons }) {
  const [isThrown, setThrown] = useState(false);

  const onClick = () => {
    setThrown(true);
    window.setTimeout(() => {
      onFight();
      setThrown(false);
    }, 1300);
  };

  return (
    <div>
      <CatcherContainer>
        <Pokeball thrown={isThrown} />

        <Button onClick={onClick} size="medium" type="primary">
          Catch!
        </Button>
      </CatcherContainer>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Trainer;
