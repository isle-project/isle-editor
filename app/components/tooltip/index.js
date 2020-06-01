// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Tooltip = Loadable( () => import( /* webpackChunkName: "Tooltip" */ './main.js' ) );


// EXPORTS //

export default Tooltip;
