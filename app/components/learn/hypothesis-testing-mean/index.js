// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LearnMeanTest = Loadable( () => import( /* webpackChunkName: "LearnMeanTest" */ './main.js' ) );


// EXPORTS //

export default LearnMeanTest;
