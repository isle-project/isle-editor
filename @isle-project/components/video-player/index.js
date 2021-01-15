// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VideoPlayer = Loadable( () => import( /* webpackChunkName: "VideoPlayer" */ './main.js' ) );


// EXPORTS //

export default VideoPlayer;
