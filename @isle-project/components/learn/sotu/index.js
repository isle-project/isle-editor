// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LearnSOTU = Loadable( () => import( /* webpackChunkName: "LearnSOTU" */ './main.js' ) );


// EXPORTS //

export default LearnSOTU;
