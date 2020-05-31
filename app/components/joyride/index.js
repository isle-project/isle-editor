// MODULES //

import Loadable from 'components/internal/loadable';
import { ACTIONS, EVENTS } from 'react-joyride';


// MAIN //

const Joyride = Loadable( () => import( /* webpackChunkName: "Joyride" */ './main.js' ) );


// EXPORTS //

export default Joyride;

export { EVENTS as EVENTS, ACTIONS as ACTIONS };
