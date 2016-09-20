
import React, {Component} from 'react';
import {connect} from 'react-redux';
const styles = {
  video: {
    width: '100%',
    height: 'auto'
  }
};
class videoViewer extends Component {
  componentWillMount () {
    var {video} = this.props;
    this.props.appBarTitle && this.props.appBarTitle(video.title);
  }
  render () {
    var {video, isOnline} = this.props;
    var onlineVideo = <video style={styles.video} src={video.src} poster={video.img} controls>
      Sorry, your browser doesn't support embedded videos.
    </video>;

    var offlineVideo = 'This video is not available while offline';

    var content = typeof isOnline === 'undefined' || isOnline ? onlineVideo : offlineVideo;
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default videoViewer;
