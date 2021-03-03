// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ErrorMessage = Loadable( () => import( /* webpackChunkName: "ErrorMessage" */ './main.js' ) );


// EXPORTS //

export default ErrorMessage;
