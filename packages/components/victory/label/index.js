// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryLabel = Loadable( () => import( /* webpackChunkName: "VictoryLabel" */ './main.js' ) );


// EXPORTS //

export default VictoryLabel;
