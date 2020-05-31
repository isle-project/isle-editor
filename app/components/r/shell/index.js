// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RShell = Loadable( () => import( /* webpackChunkName: "RShell" */ './main.js' ) );


// EXPORTS //

export default RShell;
