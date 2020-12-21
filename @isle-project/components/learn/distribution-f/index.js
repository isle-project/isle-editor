// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnFDistribution = Loadable( () => import( /* webpackChunkName: "LearnFDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnFDistribution;
