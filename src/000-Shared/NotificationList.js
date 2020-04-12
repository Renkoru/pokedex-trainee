import isEmpty from 'lodash/fp/isEmpty';

import ReactDOM from 'react-dom';
import React from 'react';

import Notification from './Notification';

const notificationRoot = document.getElementById('notification');

function NotificationList({ notifications, onClose }) {
  if (isEmpty(notifications)) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {notifications.map(({ id, type, delay, message }) => (
        <Notification key={id} type={type} delay={delay} onClose={onClose}>
          {message}
        </Notification>
      ))}
    </>,
    notificationRoot,
  );
}

export default NotificationList;
