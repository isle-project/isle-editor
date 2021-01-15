// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MultipleLinearRegression = Loadable( () => import( /* webpackChunkName: "MultipleLinearRegression" */ './main.js' ) );


// EXPORTS //

export default MultipleLinearRegression;
