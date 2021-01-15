// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DataSampler = Loadable( () => import( /* webpackChunkName: "DataSampler" */ './main.js' ) );


// EXPORTS //

export default DataSampler;
