import BlankPage from '../BlankPage.js';
export default {
  getComponent (nextState, cb) {
    cb(null, BlankPage);
  },
  getChildRoutes (partialNextState, cb) {
    cb(null, [
      require('./introRoute.js')
    ]);
  }
};
