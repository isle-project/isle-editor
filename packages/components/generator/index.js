// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Generator = Loadable( () => import( /* webpackChunkName: "Generator" */ './main.js' ) );


// EXPORTS //

export default Generator;
