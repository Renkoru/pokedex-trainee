import React from 'react';
import PropTypes from 'prop-types';

function Container({ children, ...rest }) {
  return (
    <div className="container" {...rest}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
