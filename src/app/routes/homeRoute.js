import HomePage from '../HomePage.js';
import {requireIntro} from './utils.js';

export default {
	path: 'home',
  name: 'home',
	onEnter(nextState,replace){
		requireIntro(nextState,replace);
	},

	getComponent(nextState,cb){
		cb(null,HomePage)
	}
}