// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const EnlargeableGrid = Loadable( () => import( /* webpackChunkName: "EnlargeableGrid" */ './main.js' ) );


// EXPORTS //

export default EnlargeableGrid;
