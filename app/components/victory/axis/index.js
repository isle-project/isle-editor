// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryAxis = Loadable( () => import( /* webpackChunkName: "VictoryAxis" */ './main.js' ) );


// EXPORTS //

export default VictoryAxis;
