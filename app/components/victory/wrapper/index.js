// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryWrapper = Loadable( () => import( /* webpackChunkName: "VictoryWrapper" */ './main.js' ) );


// EXPORTS //

export default VictoryWrapper;
