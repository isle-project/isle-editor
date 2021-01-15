// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const KMeans = Loadable( () => import( /* webpackChunkName: "KMeans" */ './main.js' ) );


// EXPORTS //

export default KMeans;
