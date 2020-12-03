// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryTooltip = Loadable( () => import( /* webpackChunkName: "VictoryTooltip" */ './main.js' ) );


// EXPORTS //

export default VictoryTooltip;
