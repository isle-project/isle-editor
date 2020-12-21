// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnConfidenceCoverage' );


// MAIN //

const LearnConfidenceCoverageSample = Loadable( () => import( /* webpackChunkName: "LearnConfidenceCoverageSample" */ './main.js' ) );


// EXPORTS //

export default LearnConfidenceCoverageSample;
