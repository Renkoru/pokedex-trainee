import React from 'react';

import NotificationList from 'Shared/NotificationList';
import { notificationRemove } from 'Store/actions';
import { useDispatch, useSelector } from 'react-redux';

function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications);

  function removeNotification(id) {
    dispatch(notificationRemove(id));
  }

  return <NotificationList notifications={notifications} onClose={removeNotification} />;
}

export default Notifications;
