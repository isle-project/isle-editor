// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryTooltip = Loadable( () => import( /* webpackChunkName: "VictoryTooltip" */ './main.js' ) );


// EXPORTS //

export default VictoryTooltip;
