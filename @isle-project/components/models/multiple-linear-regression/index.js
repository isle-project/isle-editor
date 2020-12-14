// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const MultipleLinearRegression = Loadable( () => import( /* webpackChunkName: "MultipleLinearRegression" */ './main.js' ) );


// EXPORTS //

export default MultipleLinearRegression;
