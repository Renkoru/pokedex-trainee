import React from 'react';

import NotificationList from 'Components/NotificationList';
import { useStore } from '../store';

function Notifications() {
  const { notifications, removeNotification } = useStore();

  return <NotificationList notifications={notifications} onClose={removeNotification} />;
}

export default Notifications;
