// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Iframe = Loadable( () => import( /* webpackChunkName: "Iframe" */ './main.js' ) );


// EXPORTS //

export default Iframe;
