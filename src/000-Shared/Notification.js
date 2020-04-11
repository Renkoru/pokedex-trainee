import React, { useEffect } from 'react';
import classNames from 'classnames';

import Button from './Button';

const typeMap = {
  danger: 'is-danger',
  warning: 'is-warning',
  success: 'is-success',
};

function Notification({ children, type, onClose, delay }) {
  useEffect(() => {
    setTimeout(() => onClose(), delay * 1000);
  }, [delay, onClose]);

  return (
    <div
      css={{ width: '320px', display: 'flex', opacity: 0.9 }}
      className={classNames('notification', typeMap[type])}
    >
      <div css={{ marginRight: '10px' }}>{children}</div>

      <Button type="light" size="small" onClick={onClose}>
        X
      </Button>
    </div>
  );
}

Notification.defaultProps = {
  type: 'is-success',
  delay: 5,
};

export default Notification;
