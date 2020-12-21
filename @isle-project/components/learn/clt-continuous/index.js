// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnCLT' );


// MAIN //

const LearnContinuousCLT = Loadable( () => import( /* webpackChunkName: "LearnContinuousCLT" */ './main.js' ) );


// EXPORTS //

export default LearnContinuousCLT;
