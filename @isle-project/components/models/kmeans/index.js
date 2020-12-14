// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const KMeans = Loadable( () => import( /* webpackChunkName: "KMeans" */ './main.js' ) );


// EXPORTS //

export default KMeans;
