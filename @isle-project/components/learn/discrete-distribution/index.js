// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnDiscreteDistribution = Loadable( () => import( /* webpackChunkName: "LearnDiscreteDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnDiscreteDistribution;
