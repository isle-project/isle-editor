// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Slider = Loadable( () => import( /* webpackChunkName: "Slider" */ './main.js' ) );


// EXPORTS //

export default Slider;
