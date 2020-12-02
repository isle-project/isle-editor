// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const HierarchicalClustering = Loadable( () => import( /* webpackChunkName: "HierarchicalClustering" */ './main.js' ) );


// EXPORTS //

export default HierarchicalClustering;
