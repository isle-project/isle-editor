// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Toolbar' );


// MAIN //

const Toolbar = Loadable( () => import( /* webpackChunkName: "Toolbar" */ './main.js' ) );


// EXPORTS //

export default Toolbar;
