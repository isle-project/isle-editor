// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryLegend = Loadable( () => import( /* webpackChunkName: "VictoryLegend" */ './main.js' ) );


// EXPORTS //

export default VictoryLegend;
