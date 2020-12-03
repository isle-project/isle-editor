// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const BeaconTooltip = Loadable( () => import( /* webpackChunkName: "BeaconTooltip" */ './main.js' ) );


// EXPORTS //

export default BeaconTooltip;
