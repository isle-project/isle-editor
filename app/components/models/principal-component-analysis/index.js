// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const PrincipalComponentAnalysis = Loadable( () => import( /* webpackChunkName: "PrincipalComponentAnalysis" */ './main.js' ) );


// EXPORTS //

export default PrincipalComponentAnalysis;
