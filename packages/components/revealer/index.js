// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Revealer = Loadable( () => import( /* webpackChunkName: "Revealer" */ './main.js' ) );


// EXPORTS //

export default Revealer;
