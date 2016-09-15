import Video from './Video.js';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    videoList: state.videoIds.map((id) => state.videos[id]),
    video: state.videos[ownProps.params.id],
    isOnline: state.app.connectivity.status === 1
  };
};

export default connect(
  mapStateToProps
)(Video);