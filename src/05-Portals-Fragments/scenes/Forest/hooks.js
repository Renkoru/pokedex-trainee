import uuid from 'uuid/v4';

import { useState } from 'react';

export function useNotifications() {
  const [notificationList, setNotification] = useState([]);

  function addNotification(notification) {
    setNotification(list => [...list, { ...notification, id: uuid() }]);
  }

  function removeNotification(id) {
    setNotification(list => list.filter(({ id: listId }) => listId !== id));
  }

  return [notificationList, addNotification, removeNotification];
}
