// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryLegend = Loadable( () => import( /* webpackChunkName: "VictoryLegend" */ './main.js' ) );


// EXPORTS //

export default VictoryLegend;
