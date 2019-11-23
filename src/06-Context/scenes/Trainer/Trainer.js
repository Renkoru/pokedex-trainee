import React, { useState } from 'react';
import styled from '@emotion/styled';

import Button from 'Shared/Button';
import EditTrainer from './EditTrainer';

function Trianer({ className, name, imageUrl, onTrainerUpdate }) {
  const [isEditMode, setEditMode] = useState(false);

  function onToggleEdit() {
    setEditMode(value => !value);
  }

  return (
    <TrainerContainer className={className}>
      <img alt="Trainer" src={imageUrl} css={{ width: '100px' }} />
      <Name>{name}</Name>

      <Button onClick={onToggleEdit} type={isEditMode ? 'danger' : 'light'}>
        {isEditMode ? 'Close' : 'Edit'}
      </Button>
      {isEditMode && <EditTrainer trainer={{ name, imageUrl }} onSubmit={onTrainerUpdate} />}
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
