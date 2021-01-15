// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Sketchpad = Loadable( () => import( /* webpackChunkName: "Sketchpad" */ './main.js' ) );


// EXPORTS //

export default Sketchpad;
