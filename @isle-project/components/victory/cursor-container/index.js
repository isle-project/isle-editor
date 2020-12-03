// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryCursorContainer = Loadable( () => import( /* webpackChunkName: "VictoryCursorContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryCursorContainer;
