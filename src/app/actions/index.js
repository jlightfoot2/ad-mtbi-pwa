import isOnline from 'is-online';

export const USER_SEES_INTRO = 'USER_SEES_INTRO';
export const USER_SEES_SPLASH = 'USER_SEES_SPLASH';
export const USER_LOAD_VIDEO = 'USER_LOAD_VIDEO';
export const CONNECTIVITY_CHANGE = 'CONNECTIVITY_CHANGE';
export const CONNECTIVITY_CHECK_START = 'CONNECTIVITY_CHECK_START';
export const CONNECTIVITY_CHECK_END = 'CONNECTIVITY_CHECK_END';
export const SHOW_FLASH_MESSAGE = 'SHOW_FLASH_MESSAGE';
export const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';
export const TAB_CHANGE_INDEX = 'TAB_CHANGE_INDEX';
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED';
export const ORIENTATION_CHANGE = 'ORIENTATION_CHANGE_EVENT';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';
export const FORM_FIELD_CHANGE = 'FORM_FIELD_CHANGE';
export const FORM_SUBMITTED = 'FORM_SUBMITTED';
export const START_MONITORING_STAGES = 'START_MONITORING_STAGES';

export const startMonitoringStages = () => {
  return {
    type: START_MONITORING_STAGES
  };
};
export const fieldChange = (field) => {
  return {
    type: FORM_FIELD_CHANGE,
    field
  };
};

export const formSubmitted = (formId, fields) => {
  return {
    type: FORM_SUBMITTED,
    formId,
    answers: fields
  };
};

export const tabChangeIndex = (id, index) => {
  return {
    type: TAB_CHANGE_INDEX,
    id,
    index
  };
};

export const windowResize = (width, height = 0) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  };
};

export const userSeesIntro = () => {
  return {
    type: USER_SEES_INTRO
  };
};

export const userSeesSplash = () => {
  return {
    type: USER_SEES_SPLASH
  };
};

export const showFlashMessage = (text) => {
  return {
    type: SHOW_FLASH_MESSAGE,
    text
  };
};
export const hideFlashMessage = (text) => {
  return {
    type: HIDE_FLASH_MESSAGE
  };
};

export const connectivityChange = (status) => {
  return {
    type: CONNECTIVITY_CHANGE,
    status
  };
};
export const connectivityCheckStart = () => {
  return {
    type: CONNECTIVITY_CHECK_START
  };
};

export const connectivityCheckEnd = () => {
  return {
    type: CONNECTIVITY_CHECK_END
  };
};

export const checkIsOnline = (checkSource) => {
  var onlineId = 1;

  return function (dispatch, getState) {
    dispatch(connectivityCheckStart());
    var makeRequest = true;
    if ('onLine' in navigator) {
      if (onlineId && !navigator.onLine) { //if navigator says offline we "over-rule" the is-online module
        onlineId = 0;
        makeRequest = false;
        if (getState().app.connectivity.status !== onlineId) {
          dispatch(connectivityChange(onlineId));
        }
        dispatch(connectivityCheckEnd());
      }
    }
    if (makeRequest) {
      isOnline(function (online) {
        onlineId = online ? 1 : 0;
        if (getState().app.connectivity.status !== onlineId) {
          dispatch(connectivityChange(onlineId));
        }
        dispatch(connectivityCheckEnd());
      });
    }
  };
};

export const questionAnswered = (answers) => {
  return {
    type: QUESTION_ANSWERED,
    answers
  };
};
