// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Gate = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Gate;
