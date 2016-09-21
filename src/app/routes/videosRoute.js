import VideosPage from '../VideosPage.js';
const dynamicVideosPage = {
  path: 'videos',
  name: 'videos',
  getComponent (nextState, callback) {
    callback(null, VideosPage);
  }
};

export default dynamicVideosPage;
