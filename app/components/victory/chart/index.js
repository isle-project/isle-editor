// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryChart = Loadable( () => import( /* webpackChunkName: "VictoryChart" */ './main.js' ) );


// EXPORTS //

export default VictoryChart;
