// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryPie = Loadable( () => import( /* webpackChunkName: "VictoryPie" */ './main.js' ) );


// EXPORTS //

export default VictoryPie;
