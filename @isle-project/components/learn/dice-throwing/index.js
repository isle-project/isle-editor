// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnDiceThrowing' );


// MAIN //

const LearnDiceThrowing = Loadable( () => import( /* webpackChunkName: "LearnDiceThrowing" */ './main.js' ) );


// EXPORTS //

export default LearnDiceThrowing;
