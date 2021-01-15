// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Queue = Loadable( () => import( /* webpackChunkName: "Queue" */ './main.js' ) );


// EXPORTS //

export default Queue;
