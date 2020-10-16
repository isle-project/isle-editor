// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LassoRegression = Loadable( () => import( /* webpackChunkName: "LassoRegression" */ './main.js' ) );


// EXPORTS //

export default LassoRegression;
