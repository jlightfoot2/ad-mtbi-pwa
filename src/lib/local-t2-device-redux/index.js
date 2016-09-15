import deviceReducer from './reducers';
import deviceActions, {windowResize} from './actions';
/*
const deviceMiddleware = store => next => action => {
  let result = next(action);
  var lastCall = 0;
  window.addEventListener('resize', () => {
    next(windowResize(window.innerWidth, window.innerHeight));
  });
  window.addEventListener('orientationchange', () => {
    setTimeout(() => (next(windowResize(window.innerWidth, window.innerHeight))), 500);
  });
  return result;
};
*/
var timeoutId = null;
var defaultDelay = 250;
var firstLoad = true;
const filterDispatches = (ms, next) => {
  timeoutId && clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    next();
  }, defaultDelay);
};

const deviceMiddleware = store => next => {
  var loadDate = new Date();
  var lastMS = loadDate.getTime();
  window.addEventListener('resize', () => {
    filterDispatches(lastMS, () => {
      next(windowResize(window.innerWidth, window.innerHeight));
    });
  });
  window.addEventListener('orientationchange', () => {
    filterDispatches(lastMS, () => {
      setTimeout(() => (next(windowResize(window.innerWidth, window.innerHeight))), 500);
    });
  });
  return action => {
    lastMS = loadDate.getTime();
    let result = next(action);

    if (firstLoad) {
      firstLoad = false;
      next(windowResize(window.innerWidth, window.innerHeight));
    }
    return result;
  };
};

export {
  deviceReducer,
  deviceActions,
  deviceMiddleware
};
