// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryVoronoiContainer = Loadable( () => import( /* webpackChunkName: "VictoryVoronoiContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryVoronoiContainer;
