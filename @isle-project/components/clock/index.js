// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Clock = Loadable( () => import( /* webpackChunkName: "Clock" */ './main.js' ) );


// EXPORTS //

export default Clock;
