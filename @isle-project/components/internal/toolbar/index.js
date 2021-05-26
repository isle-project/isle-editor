// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Toolbar = Loadable( () => import( /* webpackChunkName: "Toolbar" */ './main.js' ) );


// EXPORTS //

export default Toolbar;
