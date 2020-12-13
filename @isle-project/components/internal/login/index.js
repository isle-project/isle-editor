// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Login' );


// MAIN //

const Login = Loadable( () => import( /* webpackChunkName: "Login" */ './main.js' ) );


// EXPORTS //

export default Login;
