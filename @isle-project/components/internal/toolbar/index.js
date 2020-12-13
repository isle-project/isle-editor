// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Toolbar' );


// MAIN //

const Toolbar = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Toolbar;
