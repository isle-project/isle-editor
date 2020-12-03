// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Polaroid = Loadable( () => import( /* webpackChunkName: "Polaroid" */ './main.js' ) );


// EXPORTS //

export default Polaroid;
