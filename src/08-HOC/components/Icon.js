import React from 'react';
import classNames from 'classnames';

function Icon({ type, className, ...rest }) {
  return (
    <span className={classNames('icon', className)} {...rest}>
      <i className={`fas fa-${type}`} />
    </span>
  );
}

export default Icon;
