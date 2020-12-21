// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnStandardize' );


// MAIN //

const LearnStandardize = Loadable( () => import( /* webpackChunkName: "LearnStandardize" */ './main.js' ) );


// EXPORTS //

export default LearnStandardize;
