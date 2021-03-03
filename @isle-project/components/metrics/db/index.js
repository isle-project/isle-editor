// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MetricsDB = Loadable( () => import( /* webpackChunkName: "MetricsDB" */ './main.js' ) );


// EXPORTS //

export default MetricsDB;
