import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Pokeball({ pid, thrown = false }) {
  return (
    <div
      className={classNames('mr-pokeball', {
        'mr-throw': thrown,
      })}
    />
  );
}

export default Pokeball;
