// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Wikipedia = Loadable( () => import( /* webpackChunkName: "Wikipedia" */ './main.js' ) );


// EXPORTS //

export default Wikipedia;
