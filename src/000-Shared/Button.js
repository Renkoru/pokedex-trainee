import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, light, primary, ...rest }) => (
  <a
    className={classNames('button', {
      'is-primary': primary,
      'is-light': light,
    })}
    {...rest}
  >
    {children}
  </a>
);

Button.defaultProps = {
  primary: false,
  light: false,
};

Button.propTypes = {
  primary: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
