import React from 'react';

import styled from 'styled-components';
import {
    height,
    overflow,
    gridArea,
    gridTemplateColumns,
    gridTemplateRows,
    gridColumn,
    gridRow,
} from 'styled-system';


export const Grid = styled.div`
  ${height}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  display: grid;
`;

export const GridItem = styled.div`
  ${overflow}
  ${gridColumn}
  ${gridRow}
`;
