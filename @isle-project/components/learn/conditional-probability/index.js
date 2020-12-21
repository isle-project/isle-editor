// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnConditionalProbability' );


// MAIN //

const LearnConditionalProbability = Loadable( () => import( /* webpackChunkName: "LearnConditionalProbability" */ './main.js' ) );


// EXPORTS //

export default LearnConditionalProbability;
