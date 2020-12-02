// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LearnSOTU = Loadable( () => import( /* webpackChunkName: "LearnSOTU" */ './main.js' ) );


// EXPORTS //

export default LearnSOTU;
