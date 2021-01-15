// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Login = Loadable( () => import( /* webpackChunkName: "Login" */ './main.js' ) );


// EXPORTS //

export default Login;
