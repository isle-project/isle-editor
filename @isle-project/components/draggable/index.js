// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Draggable = Loadable( () => import( /* webpackChunkName: "Draggable" */ './main.js' ) );


// EXPORTS //

export default Draggable;
