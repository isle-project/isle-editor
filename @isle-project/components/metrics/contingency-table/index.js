// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MetricsContingencyTable = Loadable( () => import( /* webpackChunkName: "MetricsContingencyTable" */ './main.js' ) );


// EXPORTS //

export default MetricsContingencyTable;
