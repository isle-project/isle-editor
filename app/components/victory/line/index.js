// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryLine = Loadable( () => import( /* webpackChunkName: "VictoryLine" */ './main.js' ) );


// EXPORTS //

export default VictoryLine;
