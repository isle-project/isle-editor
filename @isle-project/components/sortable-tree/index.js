// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const SortableTree = Loadable( () => import( /* webpackChunkName: "SortableTree" */ './main.js' ) );


// EXPORTS //

export default SortableTree;
