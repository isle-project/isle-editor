// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const OverlayTrigger = Loadable( () => import( /* webpackChunkName: "OverlayTrigger" */ './main.js' ) );


// EXPORTS //

export default OverlayTrigger;
