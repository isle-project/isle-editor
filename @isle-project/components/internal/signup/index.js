// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Signup' );


// MAIN //

const Signup = Loadable( () => import( /* webpackChunkName: "Signup" */ './main.js' ) );


// EXPORTS //

export default Signup;
