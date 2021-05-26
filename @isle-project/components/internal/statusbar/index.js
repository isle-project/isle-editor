// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const StatusBar = Loadable( () => import( /* webpackChunkName: "StatusBar" */ './main.js' ) );


// EXPORTS //

export default StatusBar;
