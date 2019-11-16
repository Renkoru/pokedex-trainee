import React, { useState } from 'react';
import styled from '@emotion/styled';

import Button from 'Components/Button';

import Pokeball from './Pokeball';

function Catch({ onClick }) {
  const [isThrown, setThrown] = useState(false);

  function _onClick() {
    setThrown(true);
    window.setTimeout(() => {
      onClick();
      setThrown(false);
    }, 1300);
  }

  return (
    <CatcherContainer>
      <Pokeball thrown={isThrown} />

      <Button onClick={_onClick} size="medium" type="primary">
        Catch!
      </Button>
    </CatcherContainer>
  );
}

const CatcherContainer = styled('div')({
  textAlign: 'center',
  width: '200px',
});

export default Catch;
