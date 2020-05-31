// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const DataExplorer = Loadable( () => import( /* webpackChunkName: "DataExplorer" */ './main.js' ) );


// EXPORTS //

export default DataExplorer;
