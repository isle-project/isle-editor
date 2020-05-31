// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Table = Loadable( () => import( /* webpackChunkName: "Table" */ './main.js' ) );


// EXPORTS //

export default Table;
