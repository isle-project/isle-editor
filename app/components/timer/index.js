// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Timer = Loadable( () => import( /* webpackChunkName: "Timer" */ './main.js' ) );


// EXPORTS //

export default Timer;
