import Main from '../Main.js';
export default {
  getComponent (nextState, cb) {
    cb(null, Main);
  },
  getChildRoutes (partialNextState, cb) {
    cb(null, [
      require('./introRoute.js').default,
      require('./defaultRoute.js').default,
      require('./splashRoute.js').default
    ]);
  }
};
