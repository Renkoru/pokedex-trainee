import React from 'react';
import classNames from 'classnames';

function Pokeball({ thrown = false }) {
  return (
    <div
      className={classNames('mr-pokeball', {
        'mr-throw': thrown,
      })}
    />
  );
}

export default Pokeball;
