// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LearnNetworks = Loadable( () => import( /* webpackChunkName: "LearnNetworks" */ './main.js' ) );


// EXPORTS //

export default LearnNetworks;
