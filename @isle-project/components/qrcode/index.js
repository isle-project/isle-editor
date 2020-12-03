// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Qrcode = Loadable( () => import( /* webpackChunkName: "Qrcode" */ './main.js' ) );


// EXPORTS //

export default Qrcode;
