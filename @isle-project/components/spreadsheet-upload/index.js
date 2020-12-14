// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'SpreadsheetUpload' );


// MAIN //

const SpreadsheetUpload = Loadable( () => import( /* webpackChunkName: "SpreadsheetUpload" */ './main.js' ) );


// EXPORTS //

export default SpreadsheetUpload;
