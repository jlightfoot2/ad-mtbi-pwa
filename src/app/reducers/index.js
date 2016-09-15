import {combineReducers} from 'redux';
import {view} from './view.js';
import {videos, videoIds} from './videos.js';
import { app } from './app.js';
import assessment from './assessment.js';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import {REHYDRATE} from 'redux-persist/constants';
import {USER_SEES_INTRO, USER_SEES_SPLASH} from '../actions';
import {deviceReducer} from 'local-t2-device-redux';
import {navigationReducer} from 'local-t2-navigation-redux';
/*
* The data below could come from a rest server
*/
const defaultUser = {
  stage: 0,
  loaded: 0,
  role: 'anonymous',
  firstname: '',
  lastname: ''
};

/**
 * Redux State functions
 */

/**
 * Controlls the user state
 * @param object state the user's current state
 * @param object action The action that this function may respond to
 *
 * @return object the new state or the current state
 */

function user (state = defaultUser, action) {
  switch (action.type) {
    case REHYDRATE:
      if (state.loaded === 0) {
        if (typeof action.payload.user !== 'undefined') {
          return {...action.payload.user};
        }
        return {...state, loaded: 1};
      }
      break;
    case USER_SEES_SPLASH:
      if (state.loaded && state.stage === 0) {
        return {...state, stage: 1};
      }
      break;
    case USER_SEES_INTRO:
      if (state.loaded && state.stage === 1) {
        return {...state, stage: 2};
      }
      break;
  }
  return state;
}

function migrations(state = {}, action) {
  return state;
}

const appHub = combineReducers({
  app,
  migrations,
  videos,
  videoIds,
  assessment,
  form: formReducer,
  routing: routerReducer,
  user,
  view,
  device: deviceReducer,
  navigation: navigationReducer
});

export default appHub;
