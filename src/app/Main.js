/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import OnlineStatusBarIcon from './OnlineStatusContainer.js';
import AppSnackBar from './AppSnackBar.js';
import AppBarMenuIcon from './AppBarMenuIcon.js';
import { connect } from 'react-redux';
import {userSeesSplash, userSeesIntro} from './actions';
import {push, replace} from 'react-router-redux';
import { withRouter } from 'react-router';

import {deviceActions} from 'local-t2-device-redux';
var {windowResize} = deviceActions;

const styles = {
  wrapper: {
    maxWidth: '1500px',
    margin: '0 auto 0 auto'
  },
  content: {
    paddingTop: '10px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  }
};

class Main extends Component {
  constructor (props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.state = {
      open: false,
      title: ''
    };
  }
  componentWillMount () {
    this.props.dispatch(windowResize(window.innerWidth, window.innerHeight));
  }
  handleRequestClose () {
    this.setState({
      open: false
    });
  }

  handleTouchTap () {
    this.setState({
      open: true
    });
  }

  handleTitle (title) {
    this.setState({
      title: title
    });
  }

  render () {
    console.log(this.props);
    return (
        <div style={styles.wrapper}>
            <AppBar
                title={this.state.title}
                titleStyle={{textAlign: 'center'}}
                iconElementLeft={<AppBarMenuIcon/>}
                iconElementRight={<OnlineStatusBarIcon />}
                 />
                <div style={styles.content}>{React.cloneElement(this.props.children, { appBarTitle: this.handleTitle })}</div>

          <AppSnackBar />
        </div>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect(
  (state) => ({
    device: state.device
  }),
  (dispatch, ownProps) => {
    return {
      dispatch: dispatch
    };
  }
  )(Main);
