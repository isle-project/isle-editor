// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Weather = Loadable( () => import( /* webpackChunkName: "Weather" */ './main.js' ) );


// EXPORTS //

export default Weather;
