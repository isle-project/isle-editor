// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryBoxPlot = Loadable( () => import( /* webpackChunkName: "VictoryBoxPlot" */ './main.js' ) );


// EXPORTS //

export default VictoryBoxPlot;
