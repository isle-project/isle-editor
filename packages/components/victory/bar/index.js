// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryBar = Loadable( () => import( /* webpackChunkName: "VictoryBar" */ './main.js' ) );


// EXPORTS //

export default VictoryBar;
