// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Qrcode = Loadable( () => import( /* webpackChunkName: "Qrcode" */ './main.js' ) );


// EXPORTS //

export default Qrcode;
