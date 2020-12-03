// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ROutput = Loadable( () => import( /* webpackChunkName: "ROutput" */ './main.js' ) );


// EXPORTS //

export default ROutput;
