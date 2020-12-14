// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const HierarchicalClustering = Loadable( () => import( /* webpackChunkName: "HierarchicalClustering" */ './main.js' ) );


// EXPORTS //

export default HierarchicalClustering;
