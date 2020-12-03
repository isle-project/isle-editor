// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Table = Loadable( () => import( /* webpackChunkName: "Table" */ './main.js' ) );


// EXPORTS //

export default Table;
