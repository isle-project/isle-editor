// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryArea = Loadable( () => import( /* webpackChunkName: "VictoryArea" */ './main.js' ) );


// EXPORTS //

export default VictoryArea;
