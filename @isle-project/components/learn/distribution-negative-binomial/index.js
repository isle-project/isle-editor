// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnNegativeBinomialDistribution = Loadable( () => import( /* webpackChunkName: "LearnNegativeBinomialDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnNegativeBinomialDistribution;
