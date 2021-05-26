// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const StickyNote = Loadable( () => import( /* webpackChunkName: "StickyNote" */ './main.js' ) );


// EXPORTS //

export default StickyNote;
