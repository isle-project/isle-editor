// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryBrushContainer = Loadable( () => import( /* webpackChunkName: "VictoryBrushContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryBrushContainer;
