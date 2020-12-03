// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryVoronoi = Loadable( () => import( /* webpackChunkName: "VictoryVoronoi" */ './main.js' ) );


// EXPORTS //

export default VictoryVoronoi;
