// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DraggableList = Loadable( () => import( /* webpackChunkName: "DraggableList" */ './main.js' ) );


// EXPORTS //

export default DraggableList;
