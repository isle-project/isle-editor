// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDistribution' );


// MAIN //

const LearnGeometricDistribution = Loadable( () => import( /* webpackChunkName: "LearnGeometricDistribution" */ './main.js' ) );


// EXPORTS //

export default LearnGeometricDistribution;
