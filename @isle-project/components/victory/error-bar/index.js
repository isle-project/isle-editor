// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryErrorBar = Loadable( () => import( /* webpackChunkName: "VictoryErrorBar" */ './main.js' ) );


// EXPORTS //

export default VictoryErrorBar;
