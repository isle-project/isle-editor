// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VideoLecture = Loadable( () => import( /* webpackChunkName: "VideoLecture" */ './main.js' ) );


// EXPORTS //

export default VideoLecture;
