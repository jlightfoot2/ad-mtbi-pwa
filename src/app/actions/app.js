export const UPDATES_AVAILABLE = 'T2UPDATES_AVAILABLE';
export const UPDATES_USER_NOTIFIED = 'T2UPDATES_USER_NOTIFIED';
export const CACHE_STATUS_CHANGE = 'T2CACHE_STATUS_CHANGE';

export const cacheStatusChange = (isReady) => {
  return {
    type: CACHE_STATUS_CHANGE,
    isReady
  };
};

export const updatesAvailable = (available) => {
  return {
    type: UPDATES_AVAILABLE,
    available
  };
};

export const updateUserNotified = (notified) => {
  return {
    type: UPDATES_USER_NOTIFIED,
    notified
  };
};
