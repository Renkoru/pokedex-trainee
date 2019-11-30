import React from 'react';

import NotificationList from 'Shared/NotificationList';
import { notificationRemove } from 'Store/actions';
import { useStore } from '../store';

function Notifications() {
  const { notifications, dispatch } = useStore();

  function removeNotification(id) {
    dispatch(notificationRemove(id));
  }

  return <NotificationList notifications={notifications} onClose={removeNotification} />;
}

export default Notifications;
