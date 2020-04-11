import React from 'react';
import styled from '@emotion/styled';

function Trianer({ className, name, imageUrl }) {
  return (
    <TrainerContainer className={className}>
      <img alt="Trainer" src={imageUrl} css={{ width: '100px' }} />
      <Name>{name}</Name>
    </TrainerContainer>
  );
}

const Name = styled('div')({
  textAlign: 'center',
  fontWeight: 'bold',
});

const TrainerContainer = styled('div')({
  padding: '10px 20px',
});

export default Trianer;
