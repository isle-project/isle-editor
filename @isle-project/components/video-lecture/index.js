// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Video' );


// MAIN //

const VideoLecture = Loadable( () => import( /* webpackChunkName: "VideoLecture" */ './main.js' ) );


// EXPORTS //

export default VideoLecture;
