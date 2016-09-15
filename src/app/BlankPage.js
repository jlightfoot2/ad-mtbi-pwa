/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SplashPage from './SplashPage.js';
import siteTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const styles = {
  root: {
  },
  container: {

  }
};

const muiTheme = getMuiTheme(siteTheme);

class BlankPage extends Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
              {this.props.children || <SplashPage />}
      </MuiThemeProvider>
    );
  }
}

export default BlankPage;
