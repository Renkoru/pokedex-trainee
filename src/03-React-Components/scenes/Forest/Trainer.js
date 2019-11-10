import React, { useState } from 'react';
import styled from '@emotion/styled';

import { getFileNameById } from 'Services/pokemon';
import Button from 'Components/Button';

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

function EditTrainer({ trainer: { name, imageUrl }, onSubmit }) {
  const imageNumber = Number(imageUrl.split('/')[3].split('.')[0]);
  const [data, setData] = useState({ name, imageNumber });

  function onChange(event) {
    const { value, name: inputName } = event.target;
    setData(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  }

  function _onSubmit() {
    onSubmit({
      name: data.name,
      imageUrl: `/images/trainers/${getFileNameById(data.imageNumber)}.gif`,
    });
  }

  return (
    <div css={{ marginTop: '10px' }}>
      <input className="input" name="name" type="text" value={data.name} onChange={onChange} />
      <input
        className="input"
        name="imageNumber"
        type="text"
        value={data.imageNumber}
        onChange={onChange}
      />
      <input
        className="input"
        name="imageNumber"
        type="number"
        value={data.imageNumber}
        onChange={onChange}
      />

      <Button onClick={_onSubmit}>Save</Button>
    </div>
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
