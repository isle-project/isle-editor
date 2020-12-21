// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Video' );


// MAIN //

const RandomVideo = Loadable( () => import( /* webpackChunkName: "RandomVideo" */ './main.js' ) );


// EXPORTS //

export default RandomVideo;
