// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const KeyControls = Loadable( () => import( /* webpackChunkName: "KeyControls" */ './main.js' ) );


// EXPORTS //

export default KeyControls;
