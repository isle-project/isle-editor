// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnNormalDistribution = Loadable( () => import( /* webpackChunkName: "LearnNormalDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnNormalDistribution;
