// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Provider = Loadable( () => import( /* webpackChunkName: "Provider" */ './main.js' ) );


// EXPORTS //

export default Provider;
