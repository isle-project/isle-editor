// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnBetaDistribution = Loadable( () => import( /* webpackChunkName: "LearnBetaDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnBetaDistribution;
