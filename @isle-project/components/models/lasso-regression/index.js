// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const LassoRegression = Loadable( () => import( /* webpackChunkName: "LassoRegression" */ './main.js' ) );


// EXPORTS //

export default LassoRegression;
