// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryVoronoiContainer = Loadable( () => import( /* webpackChunkName: "VictoryVoronoiContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryVoronoiContainer;
