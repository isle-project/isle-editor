// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnBinomialDistribution = Loadable( () => import( /* webpackChunkName: "LearnBinomialDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnBinomialDistribution;
