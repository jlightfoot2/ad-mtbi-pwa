import {WINDOW_RESIZE, ORIENTATION_CHANGE} from '../actions';

const defaultDevice = {
  orientation: typeof window === 'object' && window.innerWidth < window.innerHeight ? 'portrait' : 'landscape',
  width: typeof window === 'object' ? window.innerWidth : 0,
  height: typeof window === 'object' ? window.innerHeight : 0,
  size: 'small'
};

const breakPoints = {
  large: 0,
  medium: 1024,
  small: 768
};

export const device = function (state = defaultDevice, action) {
  switch (action.type) {
    case ORIENTATION_CHANGE:
    case WINDOW_RESIZE:
      var width = action.width || 0;
      var height = action.height || 0;
      var size = state.size;
      if (width > breakPoints.medium) {
        size = 'large';
      } else if (width > breakPoints.small) {
        size = 'medium';
      } else if (width > 0) {
        size = 'small';
      }
      var orientation = action.width > action.height ? 'landscape' : 'portrait';
      return {...state, size: size, width: width, orientation: orientation, height: height};
  }
  return state;
};

export default device;
