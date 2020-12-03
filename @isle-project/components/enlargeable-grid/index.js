// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const EnlargeableGrid = Loadable( () => import( /* webpackChunkName: "EnlargeableGrid" */ './main.js' ) );


// EXPORTS //

export default EnlargeableGrid;
