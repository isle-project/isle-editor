// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const RandomVideo = Loadable( () => import( /* webpackChunkName: "RandomVideo" */ './main.js' ) );


// EXPORTS //

export default RandomVideo;
