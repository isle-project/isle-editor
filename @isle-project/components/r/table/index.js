// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RTable = Loadable( () => import( /* webpackChunkName: "RTable" */ './main.js' ) );


// EXPORTS //

export default RTable;
