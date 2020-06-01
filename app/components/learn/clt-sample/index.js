// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LearnSampleCLT = Loadable( () => import( /* webpackChunkName: "LearnSampleCLT" */ './main.js' ) );


// EXPORTS //

export default LearnSampleCLT;
