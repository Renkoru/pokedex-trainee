import React from 'react';
import styled from '@emotion/styled';

import Trainer from './Trainer';
import Pokedex from './Pokedex';
import Bag from './Bag';

function TrainerScene() {
  return (
    <TrainerContainer>
      <Trainer />
      <div>
        <Pokedex css={{ marginLeft: '50px' }} />
        <Bag css={{ marginTop: '50px', marginLeft: '50px' }} />
      </div>
    </TrainerContainer>
  );
}

const TrainerContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default TrainerScene;
