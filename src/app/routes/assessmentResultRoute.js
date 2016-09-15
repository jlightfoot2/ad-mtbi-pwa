import AssessmentResult from '../AssessmentResult.js';

export default {
	path: 'result',
	getComponent(nextState,cb){
		cb(null,AssessmentResult);
	}
}