export const USER_SEES_INTRO = 'USER_SEES_INTRO';
export const USER_SEES_SPLASH = 'USER_SEES_SPLASH';
export const USER_LOAD_VIDEO = 'USER_LOAD_VIDEO';
export const SHOW_FLASH_MESSAGE = 'SHOW_FLASH_MESSAGE';
export const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED';
export const ORIENTATION_CHANGE = 'ORIENTATION_CHANGE_EVENT';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';
export const FORM_FIELD_CHANGE = 'FORM_FIELD_CHANGE';
export const FORM_SUBMITTED = 'FORM_SUBMITTED';
export const START_MONITORING_STAGES = 'START_MONITORING_STAGES';

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

export const questionAnswered = (answers) => {
  return {
    type: QUESTION_ANSWERED,
    answers
  };
};
