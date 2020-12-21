// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnHypothesisTesting' );


// MAIN //

const LearnMeanTest = Loadable( () => import( /* webpackChunkName: "LearnMeanTest" */ './main.js' ) );


// EXPORTS //

export default LearnMeanTest;
