// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const FullscreenButton = Loadable( () => import( /* webpackChunkName: "FullscreenButton" */ './main.js' ) );


// EXPORTS //

export default FullscreenButton;
