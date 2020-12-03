// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const SunburstPlot = Loadable( () => import( /* webpackChunkName: "SunburstPlot" */ './main.js' ) );


// EXPORTS //

export default SunburstPlot;
