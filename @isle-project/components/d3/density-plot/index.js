// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DensityPlot = Loadable( () => import( /* webpackChunkName: "DensityPlot" */ './main.js' ) );


// EXPORTS //

export default DensityPlot;
