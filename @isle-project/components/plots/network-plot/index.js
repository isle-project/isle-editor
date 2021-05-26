// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const NetworkPlot = Loadable( () => import( /* webpackChunkName: "NetworkPlot" */ './main.js' ) );


// EXPORTS //

export default NetworkPlot;
