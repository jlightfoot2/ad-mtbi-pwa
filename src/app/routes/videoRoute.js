import VideoPage from '../VideoContainer.js';

const dynamicVideoPage = {
  path: 'video/:id',

  getComponent (nextState, callback) {
    require.ensure([], function (require) {
      callback(null, VideoPage);
    });
  }
};

export default dynamicVideoPage;
