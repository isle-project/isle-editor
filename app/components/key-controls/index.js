// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const KeyControls = Loadable( () => import( /* webpackChunkName: "KeyControls" */ './main.js' ) );


// EXPORTS //

export default KeyControls;
