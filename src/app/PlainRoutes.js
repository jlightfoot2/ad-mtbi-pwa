import React from 'react';
import ReactDOM from 'react-dom';
import BlankPage from './BlankPage.js';
import SplashPage from './SplashPage.js';
import {Router, hashHistory, browserHistory} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appHub from './reducers';
import {windowResize} from './actions';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './sagas';
import {navigationCreateMiddleware} from 'local-t2-navigation-redux';
import navigationConfig from './navigationConfig';
import createMigration from 'redux-persist-migrate';

(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./ad-service-worker.js').then(function (reg) {
      reg.onupdatefound = function () {
        // The updatefound event implies that reg.installing is set; see
        // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
        var installingWorker = reg.installing;

        installingWorker.onstatechange = function () {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.
                // It's the perfect time to display a 'New content is available; please refresh.'
                // message in the page's interface.
                console.log('New or updated content is available.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a 'Content is cached for offline use.' message.
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function (e) {
      console.error('Error during service worker registration:', e);
    });
  }
})();

function changeObjectKeys (trgt, src, ignoreKeys = []) { // TODO rename or just do one object level
  Object.keys(src).forEach(function (objId) {
    objId += '';
    var currObj = src[objId];
    Object.keys(currObj).forEach(function (key) {
      key += '';
      if (ignoreKeys.indexOf(key) !== -1) {
        console.log('deleting src key: ' + key);
        console.log(src[objId][key]);
        if (trgt[objId] && trgt[objId][key]) {
          src[objId][key] = trgt[objId][key];
        }
      }
    });
  });
  console.log(trgt, src);
  return Object.assign({}, trgt, src);
}
const manifest = {
  1: (state) => (state),
  2: (state) => (state) => (!state.videos ? state : {...state, videos: undefined}),
  3: (state) => (state) => ({...state, navigation: undefined}),
  4: (state) => (state) => ({...state, videos: undefined})
};

const sagaMiddleware = createSagaMiddleware();
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
sagaMiddleware.run(sagaRoot);
const history = syncHistoryWithStore(hashHistory, store);

window.addEventListener('resize', () => {
  store.dispatch(windowResize(window.innerWidth, window.innerHeight));
});
window.addEventListener('orientationchange', () => {
  setTimeout(() => (store.dispatch(windowResize(window.innerWidth, window.innerHeight))), 500);
});

store.subscribe(() => {
  console.log(store.getState());
});

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
    persistStore(store, {keyPrefix: 'reduxPresistAdModuleAlcDrug'}, () => {
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
