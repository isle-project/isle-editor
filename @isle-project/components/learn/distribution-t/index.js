// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnTDistribution = Loadable( () => import( /* webpackChunkName: "LearnTDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnTDistribution;
