// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryErrorBar = Loadable( () => import( /* webpackChunkName: "VictoryErrorBar" */ './main.js' ) );


// EXPORTS //

export default VictoryErrorBar;
