// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryStack = Loadable( () => import( /* webpackChunkName: "VictoryStack" */ './main.js' ) );


// EXPORTS //

export default VictoryStack;
