// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const KMeans = Loadable( () => import( /* webpackChunkName: "KMeans" */ './main.js' ) );


// EXPORTS //

export default KMeans;
