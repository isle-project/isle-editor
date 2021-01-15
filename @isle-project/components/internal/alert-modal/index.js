// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const AlertModal = Loadable( () => import( /* webpackChunkName: "AlertModal" */ './main.js' ) );


// EXPORTS //

export default AlertModal;
