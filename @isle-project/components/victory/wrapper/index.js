// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryWrapper = Loadable( () => import( /* webpackChunkName: "VictoryWrapper" */ './main.js' ) );


// EXPORTS //

export default VictoryWrapper;
