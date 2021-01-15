// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LearnMeanTest = Loadable( () => import( /* webpackChunkName: "LearnMeanTest" */ './main.js' ) );


// EXPORTS //

export default LearnMeanTest;
