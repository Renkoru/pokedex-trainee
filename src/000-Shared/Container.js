import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
