// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const UserPairer = Loadable( () => import( /* webpackChunkName: "UserPairer" */ './main.js' ) );


// EXPORTS //

export default UserPairer;
