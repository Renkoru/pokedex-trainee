import React, { useState } from 'react';
import styled from '@emotion/styled';

import capitalize from 'lodash/capitalize';

import PokemonImage from 'Components/PokemonImage';
import Icon from 'Components/Icon';
import Button from 'Components/Button';
import Flex from 'Components/Flex';
import Box from 'Shared/Box';

const Container = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 24px;
  height: 275px;
  margin: 10px !important;
  ${({ isActive }) =>
    isActive ? 'background-color: hsl(204, 86%, 53%)' : ''}
`;

const NameContainer = styled.span`
  margin-top: auto;
`;

const DeleteIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  opacity: 0.1;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function Pokemon({
  id,
  pid,
  name,
  imageUrl,
  onChange,
  onRemove,
  isActive,
  onClick,
}) {
  const [currentName, setName] = useState(name);

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onSubmitChange = () => {
    onChange({
      pid,
      name: currentName,
    });
  };

  return (
    <Container isActive={isActive}>
      <DeleteIcon
        title="Remove"
        type="times"
        onClick={() => onRemove(id)}
      />
      <PokemonImage
        onClick={() => onClick(id)}
        src={imageUrl}
        size="medium"
      />
      <NameContainer>{capitalize(currentName)}</NameContainer>

      {false && (
        <Flex>
          <input
            name="name"
            type="text"
            onChange={onNameChange}
            value={currentName}
          />
          <Button onClick={onSubmitChange}>Ok</Button>
        </Flex>
      )}
    </Container>
  );
}

export default Pokemon;
