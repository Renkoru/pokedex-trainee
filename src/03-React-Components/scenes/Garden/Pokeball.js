import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Pokeball = ({ pid, thrown = false }) => (
  <div
    className={classNames('mr-pokeball', {
      'mr-throw': thrown,
    })}
  />
);

export default Pokeball;
