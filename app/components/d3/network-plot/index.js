// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const NetworkPlot = Loadable( () => import( /* webpackChunkName: "NetworkPlot" */ './main.js' ) );


// EXPORTS //

export default NetworkPlot;
