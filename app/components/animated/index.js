// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Animated = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Animated;
