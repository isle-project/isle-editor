// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const DataTable = Loadable( () => import( /* webpackChunkName: "DataTable" */ './main.js' ) );


// EXPORTS //

export default DataTable;
