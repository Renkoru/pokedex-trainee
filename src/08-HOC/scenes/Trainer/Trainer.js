import React, { useState } from 'react';
import styled from '@emotion/styled';

import Button from 'Shared/Button';
import { updateMe } from 'Services/api';
import { userSet } from 'Store/actions';

import { useStore } from '../../store';
import EditTrainer from './EditTrainer';

function Trianer({ className }) {
  const [isEditMode, setEditMode] = useState(false);
  const { user, dispatch } = useStore();
  const { name, imageUrl } = user || {};

  async function onTrainerUpdate(data) {
    await updateMe(data);
    dispatch(userSet(data));
  }

  function onToggleEdit() {
    setEditMode(value => !value);
  }

  if (!user) {
    return <div>Loading...</div>;
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
