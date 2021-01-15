// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ROutput = Loadable( () => import( /* webpackChunkName: "ROutput" */ './main.js' ) );


// EXPORTS //

export default ROutput;
