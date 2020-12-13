// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'DataTable' );


// MAIN //

const DataTable = Loadable( () => import( /* webpackChunkName: "DataTable" */ './main.js' ) );


// EXPORTS //

export default DataTable;
