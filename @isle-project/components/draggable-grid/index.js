// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'General' );


// MAIN //

const DraggableGrid = Loadable( () => import( /* webpackChunkName: "DraggableGrid" */ './main.js' ) );


// EXPORTS //

export default DraggableGrid;
