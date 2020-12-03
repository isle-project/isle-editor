// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const TeX = Loadable( () => import( /* webpackChunkName: "TeX" */ './main.js' ) );


// EXPORTS //

export default TeX;
