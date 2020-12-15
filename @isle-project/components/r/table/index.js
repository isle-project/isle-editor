// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'R' );


// MAIN //

const RTable = Loadable( () => import( /* webpackChunkName: "RTable" */ './main.js' ) );


// EXPORTS //

export default RTable;
