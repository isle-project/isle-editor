// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const OverlayTrigger = Loadable( () => import( /* webpackChunkName: "OverlayTrigger" */ './main.js' ) );


// EXPORTS //

export default OverlayTrigger;
