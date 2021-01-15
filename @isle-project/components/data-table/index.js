// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DataTable = Loadable( () => import( /* webpackChunkName: "DataTable" */ './main.js' ) );


// EXPORTS //

export default DataTable;
