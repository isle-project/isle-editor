// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryScatter = Loadable( () => import( /* webpackChunkName: "VictoryScatter" */ './main.js' ) );


// EXPORTS //

export default VictoryScatter;
