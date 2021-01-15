// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const DeleteModal = Loadable( () => import( /* webpackChunkName: "DeleteModal" */ './main.js' ) );


// EXPORTS //

export default DeleteModal;
