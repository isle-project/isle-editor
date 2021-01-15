// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const JSShell = Loadable( () => import( /* webpackChunkName: "JSShell" */ './main.js' ) );


// EXPORTS //

export default JSShell;
