import StatusIcon from './StatusIcon.js';
import { connect } from 'react-redux';
import {checkIsOnline} from 'local-t2-app-redux/lib/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    onlineStatus: state.app.connectivity.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkOnlineStatus: () => dispatch(checkIsOnline('event'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusIcon);
