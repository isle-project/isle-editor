// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'StickyNote' );


// MAIN //

const StickyNote = Loadable( () => import( /* webpackChunkName: "StickyNote" */ './main.js' ) );


// EXPORTS //

export default StickyNote;
