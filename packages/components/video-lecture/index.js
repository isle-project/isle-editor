// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VideoLecture = Loadable( () => import( /* webpackChunkName: "VideoLecture" */ './main.js' ) );


// EXPORTS //

export default VideoLecture;
