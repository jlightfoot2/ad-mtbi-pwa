import {updateMapItem, arrayHasItem, arrayPush, arrayPushUnique ,arrayDeleteValue} from './utils.js';
import {CONNECTIVITY_CHANGE,CONNECTIVITY_CHECK_START} from '../actions';
const defaultApp = {
	connectivity: {
		status: 1, //1 == online, 0 == offline
		lastCheck: 0, //seconds ago
		lastCheckType: 'event' //('click','timer','event')
	}
}


export const app = (state = defaultApp,action) => {
	switch(action.type){
		case CONNECTIVITY_CHECK_START:
		    console.log(CONNECTIVITY_CHECK_START);
			return updateMapItem(state,'connectivity',(err,item) => {
				item.lastCheck = 0;
				return item;
			} )
		case CONNECTIVITY_CHANGE:
			console.log(CONNECTIVITY_CHANGE);
			return updateMapItem(state,'connectivity',(err,item) => {
				item.status = action.status;
				return item;
			} )	
	}
	return state;
}