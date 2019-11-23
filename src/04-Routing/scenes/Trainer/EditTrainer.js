import React, { useState } from 'react';

import Button from 'Shared/Button';
import { getFileNameById } from 'Services/pokemon';

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

export default EditTrainer;
