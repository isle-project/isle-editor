// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DataExplorer = Loadable( () => import( /* webpackChunkName: "DataExplorer" */ './main.js' ) );


// EXPORTS //

export default DataExplorer;
