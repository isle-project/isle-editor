// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnChisquareDistribution = Loadable( () => import( /* webpackChunkName: "LearnChisquareDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnChisquareDistribution;
