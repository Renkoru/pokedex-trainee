import React from 'react';
import PropTypes from 'prop-types';

import { getFileNameById } from 'Services/pokemon';

function Pokemon({ pid, ...rest }) {
  const fileName = getFileNameById(pid);
  return (
    <img
      src={`/images/pokemons/${fileName}.gif`}
      style={{
        height: '200px',
      }}
      {...rest}
    />
  );
}

Pokemon.propTypes = {
  pid: PropTypes.number.isRequired,
};

export default Pokemon;
