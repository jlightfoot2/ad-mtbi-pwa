import {AppStatusContainer} from 'local-t2-app-redux/lib/components';
console.log(AppStatusContainer);
export default {
  path: 'debug',
  name: 'debug',
  getComponent (nextState, cb) {
    cb(null, AppStatusContainer);
  }
};
