// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const SimpleLinearRegression = Loadable( () => import( /* webpackChunkName: "SimpleLinearRegression" */ './main.js' ) );


// EXPORTS //

export default SimpleLinearRegression;
