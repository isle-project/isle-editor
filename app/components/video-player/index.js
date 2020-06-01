// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VideoPlayer = Loadable( () => import( /* webpackChunkName: "VideoPlayer" */ './main.js' ) );


// EXPORTS //

export default VideoPlayer;
