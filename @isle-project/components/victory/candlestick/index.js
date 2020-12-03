// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const VictoryCandlestick = Loadable( () => import( /* webpackChunkName: "VictoryCandlestick" */ './main.js' ) );


// EXPORTS //

export default VictoryCandlestick;
