// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'DataExplorer' );


// MAIN //

const DataExplorer = Loadable( () => import( /* webpackChunkName: "DataExplorer" */ './main.js' ) );


// EXPORTS //

export default DataExplorer;
