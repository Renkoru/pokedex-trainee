import isEmpty from 'lodash/fp/isEmpty';

import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';

import Button from 'Shared/Button';
import classNames from 'classnames';

const typeMap = {
  danger: 'is-danger',
  warning: 'is-warning',
  success: 'is-success',
};

const notificationRoot = document.getElementById('notification');

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

function NotificationList({ notifications, onClose }) {
  if (isEmpty(notifications)) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {notifications.map(({ id, type, delay, message }) => (
        <Notification key={id} type={type} delay={delay} onClose={() => onClose(id)}>
          {message}
        </Notification>
      ))}
    </>,
    notificationRoot,
  );
}

export default NotificationList;
