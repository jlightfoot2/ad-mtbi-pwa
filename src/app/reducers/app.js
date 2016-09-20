import {updateMapItem} from './utils.js';
import {
  CONNECTIVITY_CHANGE,
  CONNECTIVITY_CHECK_START
} from '../actions';

import {
  UPDATES_AVAILABLE,
  UPDATES_USER_NOTIFIED,
  CACHE_STATUS_CHANGE
} from '../actions/app';

const defaultApp = {
  connectivity: {
    status: 1, // 1 == online, 0 == offline
    lastCheck: 0, // seconds ago
    lastCheckType: 'event' // ('click','timer','event')
  },
  cache: {
    isReady: false // ready for offlining
  },
  updates: {
    available: false,
    userNotified: false
  }
};

export const app = (state = defaultApp, action) => {
  switch (action.type) {
    case CONNECTIVITY_CHECK_START:
      return updateMapItem(state, 'connectivity', (err, item) => {
        err && console.log(err);
        item.lastCheck = 0;
        return item;
      });
    case CONNECTIVITY_CHANGE:
      return updateMapItem(state, 'connectivity', (err, item) => {
        err && console.log(err);
        item.status = action.status;
        return item;
      });
    case UPDATES_USER_NOTIFIED:
      return {...state, updates: {...state.updates, userNotified: action.notified}};
    case CACHE_STATUS_CHANGE:
      return {...state, cache: {...state.cache, isReady: action.isReady}};
    case UPDATES_AVAILABLE:
      return {...state, updates: {...state.updates, available: action.available}};
  }
  return state;
};
