// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const SpreadsheetUpload = Loadable( () => import( /* webpackChunkName: "SpreadsheetUpload" */ './main.js' ) );


// EXPORTS //

export default SpreadsheetUpload;
