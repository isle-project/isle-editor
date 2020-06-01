// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const JSShell = Loadable( () => import( /* webpackChunkName: "JSShell" */ './main.js' ) );


// EXPORTS //

export default JSShell;
