import React from 'react';
import classNames from 'classnames';

const sizeMap = {
  default: '',
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

const colorMap = {
  default: 'is-success',
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
};

function Button({ children, as, type, size, ...rest }) {
  const DomContainer = as;

  return (
    <DomContainer className={classNames('button', sizeMap[size], colorMap[type])} {...rest}>
      {children}
    </DomContainer>
  );
}

Button.defaultProps = {
  type: 'default',
  size: 'default',
  as: 'button',
};

export default Button;
