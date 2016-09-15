
import Main from '../Main.js';
import {requireIntro} from './utils.js';

export default {
	path: 'main',
	getComponent(nextState,cb){
console.log('main page called 1');
		cb(null,Main);
	},
  name: 'main',
  	getChildRoutes(partialNextState, cb) {
  		require.ensure([], function (require) {
	      	cb(null, [
	        	require('./homeRoute.js').default,
	        	require('./videosRoute.js').default,
	        	require('./videoRoute.js').default,
	        	require('./libraryRoute.js').default,
	        	require('./assessmentRoute.js').default,
	        	require('./assessmentResultRoute.js').default
	      	])
      });

  	}
}