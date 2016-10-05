import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './PlainRoutes.js'; // Our custom react component
import './reducers';
require('file?name=manifest.json!json-file!json!../www/manifest.json');
require('../www/index.html');
require('../www/main.css');
require('../images/icons/appIcon_144.png');
require('../images/icons/appIcon_152.png');
require('../images/icons/appIcon_32.png');
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Routes />, document.getElementById('app'));
