// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import './init_mathjax.js';


// MAIN //

const TeX = Loadable( () => import( /* webpackChunkName: "TeX" */ './main.js' ) );


// EXPORTS //

export default TeX;
