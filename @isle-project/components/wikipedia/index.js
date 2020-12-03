// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Wikipedia = Loadable( () => import( /* webpackChunkName: "Wikipedia" */ './main.js' ) );


// EXPORTS //

export default Wikipedia;
