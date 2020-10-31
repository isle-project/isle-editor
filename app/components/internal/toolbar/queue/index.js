// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Queue = Loadable( () => import( /* webpackChunkName: "Queue" */ './main.js' ) );


// EXPORTS //

export default Queue;
