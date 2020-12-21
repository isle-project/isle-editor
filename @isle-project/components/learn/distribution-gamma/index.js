// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnGammaDistribution = Loadable( () => import( /* webpackChunkName: "LearnGammaDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnGammaDistribution;
