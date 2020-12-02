// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryPie = Loadable( () => import( /* webpackChunkName: "VictoryPie" */ './main.js' ) );


// EXPORTS //

export default VictoryPie;
