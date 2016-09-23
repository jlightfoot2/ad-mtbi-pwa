import Dialog from './Dialog';
import { connect } from 'react-redux';
import React from 'react';

import {updateUserNotified} from 'local-t2-app-redux/lib/actions';

const stateToProps = (state, ownProps) => {
  return {
    open: state.app.updates.available && !state.app.updates.userNotified,
    message: 'There are updates available for this app. This page will reload.'
  };
};

const stateToDispatch = (state, ownProps) => {
  return {
    onClick: () => {
      updateUserNotified(true);
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };
};

export default connect(stateToProps, stateToDispatch)(Dialog);
