// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnExponentialDistribution = Loadable( () => import( /* webpackChunkName: "LearnExponentialDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnExponentialDistribution;
