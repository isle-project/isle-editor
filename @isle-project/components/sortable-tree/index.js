// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'General' );


// MAIN //

const SortableTree = Loadable( () => import( /* webpackChunkName: "SortableTree" */ './main.js' ) );


// EXPORTS //

export default SortableTree;
