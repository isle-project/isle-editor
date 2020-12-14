// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const SimpleLinearRegression = Loadable( () => import( /* webpackChunkName: "SimpleLinearRegression" */ './main.js' ) );


// EXPORTS //

export default SimpleLinearRegression;
