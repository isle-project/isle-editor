// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Statusbar = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Statusbar;
