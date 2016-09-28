import React from 'react';
import ReactDOM from 'react-dom';
import BlankPage from './BlankPage.js';
import SplashPage from './SplashPage.js';
import {Router, hashHistory, browserHistory} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appHub from './reducers';
import {showFlashMessage} from './actions';
import {appActions, appSaga, registerPromise} from 'local-t2-app-redux';

import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import {navigationCreateMiddleware} from 'local-t2-navigation-redux';
import navigationConfig from './navigationConfig';
import createMigration from 'redux-persist-migrate';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
var {updatesAvailable, updateUserNotified, cacheStatusChange} = appActions;

const manifest = {
  100: (state) => ({...state, videos: undefined}),
  101: (state) => ({...state, videoIds: undefined}),
  102: (state) => ({...state, app: undefined}),
  103: (state) => ({...state, navigation: undefined}),
  106: (state) => ({...state, videos: undefined}),
  108: (state) => ({...state, app: undefined}),
  112: (state) => ({...state, videos: undefined})
};

let reducerKey = 'migrations';

const migration = createMigration(manifest, reducerKey);
const persistEnhancer = compose(migration, autoRehydrate());

const store = createStore(
    appHub,
    applyMiddleware(
            routerMiddleware(browserHistory),
            thunkMiddleware,
            sagaMiddleware,
            navigationCreateMiddleware(navigationConfig)
          ),
    persistEnhancer
  );
sagaMiddleware.run(appSaga);

const history = syncHistoryWithStore(hashHistory, store);

if ('serviceWorker' in navigator) {
  const registrationPromise = navigator.serviceWorker.register('./ad-service-worker.js');
  registerPromise(registrationPromise, store);
}

if (__DEVTOOLS__) {
  store.subscribe(() => {
    console.log(store.getState());
  });
}

const rootRoute = [
  {
    getComponent (nextState, cb) {
      cb(null, BlankPage);
    },
    name: 'root',
    childRoutes: [
      require('./routes/quickLoadRoute.js').default,
      require('./routes/mainPageRoute.js').default
    ]
  }
];

export default class AppProvider extends React.Component {

  constructor () {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount () {
    persistStore(store, {keyPrefix: 'reduxPresistAdModuleMtbi'}, () => {
      setTimeout(() => {
        this.setState({ rehydrated: true });
      }, 300);
    });
  }

  render () {
    if (!this.state.rehydrated) {
      return <BlankPage><SplashPage/></BlankPage>;
    }
    return (
      <Provider store={store}>
        <Router history={history} routes={rootRoute} />
      </Provider>
    );
  }
}
