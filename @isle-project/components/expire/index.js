// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Expire = Loadable( () => import( /* webpackChunkName: "Expire" */ './main.js' ) );


// EXPORTS //

export default Expire;
