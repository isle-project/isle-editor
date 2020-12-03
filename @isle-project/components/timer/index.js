// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Timer = Loadable( () => import( /* webpackChunkName: "Timer" */ './main.js' ) );


// EXPORTS //

export default Timer;
