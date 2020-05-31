// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const DataSampler = Loadable( () => import( /* webpackChunkName: "DataSampler" */ './main.js' ) );


// EXPORTS //

export default DataSampler;
