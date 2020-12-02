// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryGroup = Loadable( () => import( /* webpackChunkName: "VictoryGroup" */ './main.js' ) );


// EXPORTS //

export default VictoryGroup;
