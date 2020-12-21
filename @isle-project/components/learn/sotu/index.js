// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnSOTU' );


// MAIN //

const LearnSOTU = Loadable( () => import( /* webpackChunkName: "LearnSOTU" */ './main.js' ) );


// EXPORTS //

export default LearnSOTU;
