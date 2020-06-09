// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryBrushContainer = Loadable( () => import( /* webpackChunkName: "VictoryBrushContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryBrushContainer;
