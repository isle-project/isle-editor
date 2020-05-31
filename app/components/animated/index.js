// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Animated = Loadable( () => import( /* webpackChunkName: "Animated" */ './main.js' ) );


// EXPORTS //

export default Animated;
