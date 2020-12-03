// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const BeaconTooltip = Loadable( () => import( /* webpackChunkName: "BeaconTooltip" */ './main.js' ) );


// EXPORTS //

export default BeaconTooltip;
