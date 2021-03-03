// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Switch = Loadable( () => import( /* webpackChunkName: "Switch" */ './main.js' ) );


// EXPORTS //

export default Switch;
