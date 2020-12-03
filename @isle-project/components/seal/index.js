// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Seal = Loadable( () => import( /* webpackChunkName: "Seal" */ './main.js' ) );


// EXPORTS //

export default Seal;
