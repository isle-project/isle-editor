// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RandomVideo = Loadable( () => import( /* webpackChunkName: "RandomVideo" */ './main.js' ) );


// EXPORTS //

export default RandomVideo;
