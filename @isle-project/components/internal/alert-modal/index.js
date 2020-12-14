// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'AlertModal' );


// MAIN //

const AlertModal = Loadable( () => import( /* webpackChunkName: "AlertModal" */ './main.js' ) );


// EXPORTS //

export default AlertModal;
