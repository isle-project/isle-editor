// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const MultipleLinearRegression = Loadable( () => import( /* webpackChunkName: "MultipleLinearRegression" */ './main.js' ) );


// EXPORTS //

export default MultipleLinearRegression;
