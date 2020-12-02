// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryScatter = Loadable( () => import( /* webpackChunkName: "VictoryScatter" */ './main.js' ) );


// EXPORTS //

export default VictoryScatter;
