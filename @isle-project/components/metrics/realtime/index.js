// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MetricsRealTime = Loadable( () => import( /* webpackChunkName: "MetricsRealTime" */ './main.js' ) );


// EXPORTS //

export default MetricsRealTime;
