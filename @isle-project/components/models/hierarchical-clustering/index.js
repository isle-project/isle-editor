// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const HierarchicalClustering = Loadable( () => import( /* webpackChunkName: "HierarchicalClustering" */ './main.js' ) );


// EXPORTS //

export default HierarchicalClustering;
