// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Unveil = Loadable( () => import( /* webpackChunkName: "Unveil" */ './main.js' ) );


// EXPORTS //

export default Unveil;
