// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryVoronoi = Loadable( () => import( /* webpackChunkName: "VictoryVoronoi" */ './main.js' ) );


// EXPORTS //

export default VictoryVoronoi;
