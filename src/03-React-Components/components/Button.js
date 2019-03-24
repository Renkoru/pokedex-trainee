import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const sizeMap = {
  default: '',
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

// const Button = props => <button style={{ fontSize: '24px' }} {...props} />;
const Button = ({ children, light, primary, size = 'default', ...rest }) => (
  <a
    className={classNames('button', sizeMap[size], {
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
