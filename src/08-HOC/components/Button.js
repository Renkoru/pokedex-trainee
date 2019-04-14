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

const colorMap = {
  default: '',
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
};

// const Button = props => <button style={{ fontSize: '24px' }} {...props} />;
function Button({ children, type, size, ...rest }) {
  return (
    <a
      className={classNames(
        'button',
        'is-delete',
        sizeMap[size],
        colorMap[type],
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

Button.defaultProps = {
  type: 'default',
  size: 'default',
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
