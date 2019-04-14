import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({ children, className }) => (
  <div className={classNames('box', className)}>{children}</div>
);

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Box;
