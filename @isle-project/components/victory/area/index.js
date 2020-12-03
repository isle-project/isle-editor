// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryArea = Loadable( () => import( /* webpackChunkName: "VictoryArea" */ './main.js' ) );


// EXPORTS //

export default VictoryArea;
