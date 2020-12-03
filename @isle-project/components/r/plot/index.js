// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RPlot = Loadable( () => import( /* webpackChunkName: "RPlot" */ './main.js' ) );


// EXPORTS //

export default RPlot;
