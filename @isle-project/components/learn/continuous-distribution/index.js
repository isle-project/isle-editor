// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnContinuousDistribution = Loadable( () => import( /* webpackChunkName: "LearnContinuousDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnContinuousDistribution;
