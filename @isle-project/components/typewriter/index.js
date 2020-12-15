// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Typewriter = Loadable( () => import( /* webpackChunkName: "Typewriter" */ './main.js' ) );


// EXPORTS //

export default Typewriter;
