// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Animated = Loadable( () => import( /* webpackChunkName: "Animated" */ './main.js' ) );


// EXPORTS //

export default Animated;
