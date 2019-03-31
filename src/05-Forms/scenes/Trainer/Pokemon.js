import React, { useState } from 'react';
import styled from '@emotion/styled';

import capitalize from 'lodash/capitalize';

import { getFileNameById } from 'Services/pokemon';
import Button from 'Components/Button';
import Flex from 'Components/Flex';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 24px;
  margin-bottom: 50px;
`;

function Image({ pid, ...rest }) {
  const fileName = getFileNameById(pid);
  return (
    <img
      src={`/images/pokemons/${fileName}.gif`}
      style={{
        width: '40%',
      }}
      {...rest}
    />
  );
}

function Pokemon({ id, name, onChange }) {
  const [currentName, setName] = useState(name);

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onSubmitChange = () => {
    onChange({
      id,
      name: currentName,
    });
  };

  return (
    <Container>
      <Image pid={id} />
      {capitalize(currentName)}
      <Flex>
        <input
          name="name"
          type="text"
          onChange={onNameChange}
          value={currentName}
        />
        <Button onClick={onSubmitChange}>Ok</Button>
      </Flex>
    </Container>
  );
}

export default Pokemon;
