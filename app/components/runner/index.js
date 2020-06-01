// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Runner = Loadable( () => import( /* webpackChunkName: "Runner" */ './main.js' ) );


// EXPORTS //

export default Runner;
