// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Slider = Loadable( () => import( /* webpackChunkName: "Slider" */ './main.js' ) );


// EXPORTS //

export default Slider;
