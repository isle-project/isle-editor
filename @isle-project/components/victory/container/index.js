// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryContainer = Loadable( () => import( /* webpackChunkName: "VictoryContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryContainer;
