// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const SummaryStatistics = Loadable( () => import( /* webpackChunkName: "SummaryStatistics" */ './main.js' ) );


// EXPORTS //

export default SummaryStatistics;
