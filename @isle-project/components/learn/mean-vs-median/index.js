// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnMeanVSMedian' );


// MAIN //

const LearnMeanVSMedian = Loadable( () => import( /* webpackChunkName: "LearnMeanVSMedian" */ './main.js' ) );


// EXPORTS //

export default LearnMeanVSMedian;
