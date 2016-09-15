import SplashPage from '../SplashPage.js';

export default {
	path: 'splash',
  name: 'splash',
	getComponent(nextState,cb){
		cb(null,SplashPage);
	}
}