// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const RShell = Loadable( () => import( /* webpackChunkName: "RShell" */ './main.js' ) );


// EXPORTS //

export default RShell;
