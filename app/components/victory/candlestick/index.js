// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VictoryCandlestick = Loadable( () => import( /* webpackChunkName: "VictoryCandlestick" */ './main.js' ) );


// EXPORTS //

export default VictoryCandlestick;
