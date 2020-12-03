// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const StickyNote = Loadable( () => import( /* webpackChunkName: "StickyNote" */ './main.js' ) );


// EXPORTS //

export default StickyNote;
