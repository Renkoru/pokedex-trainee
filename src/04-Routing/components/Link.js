import React from 'react';
import { css } from '@emotion/core';

function Link({ to, children }) {
  return (
    <a css={css({ paddingRight: '10px' })} href={to}>
      {children}
    </a>
  );
}

export default Link;
