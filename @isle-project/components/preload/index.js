// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Preload = Loadable( () => import( /* webpackChunkName: "Preload" */ './main.js' ) );


// EXPORTS //

export default Preload;
