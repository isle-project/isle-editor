// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryLine = Loadable( () => import( /* webpackChunkName: "VictoryLine" */ './main.js' ) );


// EXPORTS //

export default VictoryLine;
