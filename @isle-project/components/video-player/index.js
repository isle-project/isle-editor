// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'VideoPlayer' );


// MAIN //

const VideoPlayer = Loadable( () => import( /* webpackChunkName: "VideoPlayer" */ './main.js' ) );


// EXPORTS //

export default VideoPlayer;
