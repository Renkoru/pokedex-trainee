import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pid, ...rest }) => (
  <img
    src={`/images/pokemons/${pid}.gif`}
    style={{
      height: '200px',
    }}
    {...rest}
  />
);

Pokemon.propTypes = {
  pid: PropTypes.string.isRequired,
};

export default Pokemon;
