// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Statusbar = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Statusbar;
