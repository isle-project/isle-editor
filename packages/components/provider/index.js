// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Provider = Loadable( () => import( /* webpackChunkName: "Provider" */ './main.js' ) );


// EXPORTS //

export default Provider;
