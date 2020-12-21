// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnStatisticalModels' );


// MAIN //

const LearnStatisticalModels = Loadable( () => import( /* webpackChunkName: "LearnStatisticalModels" */ './main.js' ) );


// EXPORTS //

export default LearnStatisticalModels;
