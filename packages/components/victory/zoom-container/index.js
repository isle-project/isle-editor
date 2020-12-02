// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryZoomContainer = Loadable( () => import( /* webpackChunkName: "VictoryZoomContainer" */ './main.js' ) );


// EXPORTS //

export default VictoryZoomContainer;
