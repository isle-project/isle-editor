// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Clock = Loadable( () => import( /* webpackChunkName: "Clock" */ './main.js' ) );


// EXPORTS //

export default Clock;
