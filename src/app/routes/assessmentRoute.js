import Assessment from '../Assessment2.js';
import {requireIntro} from './utils.js';

export default {
	path: 'assessment',
	getComponent(nextState,cb){
		cb(null,Assessment);
	}
}