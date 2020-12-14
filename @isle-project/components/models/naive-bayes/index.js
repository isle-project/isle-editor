// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StatisticalModels' );


// MAIN //

const NaiveBayes = Loadable( () => import( /* webpackChunkName: "NaiveBayes" */ './main.js' ) );


// EXPORTS //

export default NaiveBayes;
