// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Joyride = Loadable( () => import( /* webpackChunkName: "Joyride" */ './main.js' ) );


// EXPORTS //

export default Joyride;
