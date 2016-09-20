import { takeEvery, delay } from 'redux-saga'
import { put,call,fork } from 'redux-saga/effects'
import {checkIsOnline} from '../actions';

// Our worker Saga: will perform the async increment task
function* checkOnlineStatus() {
	const defaultDelay = 20000;
	while (true) {

		yield call(delay,defaultDelay);
		yield put(checkIsOnline('timer'));
	}
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* sagaRoot() {
  yield fork(checkOnlineStatus);
}