import PTSComponent from '../Library.js';

export default {
  path: 'library',
  name: 'library',
  getComponent (nextState, cb) {
    cb(null, PTSComponent);
  }
};
