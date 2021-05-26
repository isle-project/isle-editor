// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const SortableTree = Loadable( () => import( /* webpackChunkName: "SortableTree" */ './main.js' ) );


// EXPORTS //

export default SortableTree;
