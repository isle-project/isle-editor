// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'R' );


// MAIN //

const RHelp = Loadable( () => import( /* webpackChunkName: "RHelp" */ './main.js' ) );


// EXPORTS //

export default RHelp;
