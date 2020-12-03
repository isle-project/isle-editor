// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryBoxPlot = Loadable( () => import( /* webpackChunkName: "VictoryBoxPlot" */ './main.js' ) );


// EXPORTS //

export default VictoryBoxPlot;
