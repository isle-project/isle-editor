// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LearnNetworks = Loadable( () => import( /* webpackChunkName: "LearnNetworks" */ './main.js' ) );


// EXPORTS //

export default LearnNetworks;
