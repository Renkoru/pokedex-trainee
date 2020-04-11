import random from 'lodash/fp/random';

import React from 'react';
import styled from '@emotion/styled';

const Image = styled('div')(({ id }) => ({
  height: '200px',
  width: '200px',
  backgroundImage: "url('/images/tree-set.png')",
  backgroundPositionX: `-${200 * id}px`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

function Tree() {
  const treeId = random(0, 3);
  return <Image id={treeId} />;
}

export default Tree;
