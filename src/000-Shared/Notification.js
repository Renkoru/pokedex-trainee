import React, { useEffect, useCallback } from 'react';
import classNames from 'classnames';

import Button from './Button';

const typeMap = {
  danger: 'is-danger',
  warning: 'is-warning',
  success: 'is-success',
};

function Notification({ id, children, type, onClose, delay, noAutoClose }) {
  const _onClose = useCallback(() => onClose(id), [id, onClose]);

  useEffect(() => {
    if (noAutoClose) {
      return;
    }
    setTimeout(() => _onClose(), delay * 1000);
  }, [delay, _onClose, noAutoClose]);

  return (
    <div
      css={{ width: '320px', display: 'flex', opacity: 0.9 }}
      className={classNames('notification', typeMap[type])}
    >
      <div css={{ marginRight: '10px' }}>{children}</div>

      <Button
        css={{ marginLeft: 'auto' }}
        type="light"
        size="small"
        onClick={_onClose}
      >
        X
      </Button>
    </div>
  );
}

Notification.defaultProps = {
  type: 'success',
  delay: 5,
  onClose: () => {},
  noAutoClose: false,
};

export default Notification;
