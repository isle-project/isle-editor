// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Ticketing = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Ticketing;
