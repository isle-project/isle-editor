// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Iframe = Loadable( () => import( /* webpackChunkName: "Iframe" */ './main.js' ) );


// EXPORTS //

export default Iframe;
