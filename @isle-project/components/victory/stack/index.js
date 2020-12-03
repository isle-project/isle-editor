// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryStack = Loadable( () => import( /* webpackChunkName: "VictoryStack" */ './main.js' ) );


// EXPORTS //

export default VictoryStack;
