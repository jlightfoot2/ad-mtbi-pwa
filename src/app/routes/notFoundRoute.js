import NotFound from '../NotFound.js';
export default {
  path: '*',
  name: 'home',
  getComponent (nextState, cb) {
    cb(null, NotFound);
  }
};
