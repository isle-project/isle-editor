// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'KMeans' );


// MAIN //

const KMeans = Loadable( () => import( /* webpackChunkName: "StatisticalModels" */ './main.js' ) );


// EXPORTS //

export default KMeans;
