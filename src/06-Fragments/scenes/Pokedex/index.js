import React from 'react';
import capitalize from 'lodash/capitalize';
import styled from '@emotion/styled';

import { getFileNameById } from 'Services/pokemon';

// extract this into shared components
function Image({ pid, ...rest }) {
  const fileName = getFileNameById(pid);
  return (
    <img
      src={`/images/pokemons/${fileName}.gif`}
      style={{
        width: '150px',
      }}
      {...rest}
    />
  );
}

const Td = styled.td`
  text-align: center;
  vertical-align: middle;
`;

function Columns({ pokemons }) {
  return (
    <React.Fragment>
      {pokemons.map(pokemon => (
        <tr key={pokemon.id}>
          <Td>
            <Image pid={pokemon.id} />
          </Td>
          <Td>{pokemon.id}</Td>
          <Td>{capitalize(pokemon.name)}</Td>
          <Td>{pokemon.weight}</Td>
        </tr>
      ))}
    </React.Fragment>
  );
}

function Poketable({ pokemons }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Id</th>
          <th>Name</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <Columns pokemons={pokemons} />
      </tbody>
    </table>
  );
}

function Pokedex({ pokemons }) {
  return (
    <div>
      <Poketable pokemons={pokemons} />
    </div>
  );
}

export default Pokedex;
