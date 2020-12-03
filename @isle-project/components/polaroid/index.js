// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Polaroid = Loadable( () => import( /* webpackChunkName: "Polaroid" */ './main.js' ) );


// EXPORTS //

export default Polaroid;
