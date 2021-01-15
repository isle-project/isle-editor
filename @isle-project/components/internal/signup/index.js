// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Signup = Loadable( () => import( /* webpackChunkName: "Signup" */ './main.js' ) );


// EXPORTS //

export default Signup;
