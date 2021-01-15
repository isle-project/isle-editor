// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const PrincipalComponentAnalysis = Loadable( () => import( /* webpackChunkName: "PrincipalComponentAnalysis" */ './main.js' ) );


// EXPORTS //

export default PrincipalComponentAnalysis;
