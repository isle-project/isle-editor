// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryAnimation = Loadable( () => import( /* webpackChunkName: "VictoryAnimation" */ './main.js' ) );


// EXPORTS //

export default VictoryAnimation;
