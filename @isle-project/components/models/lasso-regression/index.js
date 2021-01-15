// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LassoRegression = Loadable( () => import( /* webpackChunkName: "LassoRegression" */ './main.js' ) );


// EXPORTS //

export default LassoRegression;
