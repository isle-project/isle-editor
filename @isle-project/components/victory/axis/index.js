// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryAxis = Loadable( () => import( /* webpackChunkName: "VictoryAxis" */ './main.js' ) );


// EXPORTS //

export default VictoryAxis;
