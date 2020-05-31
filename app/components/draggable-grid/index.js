// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const DraggableGrid = Loadable( () => import( /* webpackChunkName: "DraggableGrid" */ './main.js' ) );


// EXPORTS //

export default DraggableGrid;
