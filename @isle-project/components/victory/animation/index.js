// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryAnimation = Loadable( () => import( /* webpackChunkName: "VictoryAnimation" */ './main.js' ) );


// EXPORTS //

export default VictoryAnimation;
