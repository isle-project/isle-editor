// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnCLT' );


// MAIN //

const LearnSampleCLT = Loadable( () => import( /* webpackChunkName: "LearnSampleCLT" */ './main.js' ) );


// EXPORTS //

export default LearnSampleCLT;
