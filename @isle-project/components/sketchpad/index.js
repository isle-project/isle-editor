// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Sketchpad = Loadable( () => import( /* webpackChunkName: "Sketchpad" */ './main.js' ) );


// EXPORTS //

export default Sketchpad;
