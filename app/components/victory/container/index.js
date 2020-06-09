// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryContainer = Loadable( () => import( /* webpackChunkName: "VictoryContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryContainer;
