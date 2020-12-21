// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnUniformDistribution = Loadable( () => import( /* webpackChunkName: "LearnUniformDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnUniformDistribution;
