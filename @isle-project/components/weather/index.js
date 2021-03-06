// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Weather = Loadable( () => import( /* webpackChunkName: "Weather" */ './main.js' ) );


// EXPORTS //

export default Weather;
