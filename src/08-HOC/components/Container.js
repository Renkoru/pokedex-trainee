import React from 'react';
import PropTypes from 'prop-types';

function Container({ children, onClick, ...rest }) {
  return (
    <div className="container" {...rest} onClick={onClick}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
