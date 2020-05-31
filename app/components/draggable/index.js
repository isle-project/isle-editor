// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Draggable = Loadable( () => import( /* webpackChunkName: "Draggable" */ './main.js' ) );


// EXPORTS //

export default Draggable;
