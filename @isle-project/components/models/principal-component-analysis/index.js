// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const PrincipalComponentAnalysis = Loadable( () => import( /* webpackChunkName: "PrincipalComponentAnalysis" */ './main.js' ) );


// EXPORTS //

export default PrincipalComponentAnalysis;
