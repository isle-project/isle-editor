// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnHypothesisTesting' );


// MAIN //

const LearnProportionTest = Loadable( () => import( /* webpackChunkName: "LearnProportionTest" */ './main.js' ) );


// EXPORTS //

export default LearnProportionTest;
