// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Engagement = Loadable( () => import( /* webpackChunkName: "Engagement" */ './main.js' ) );


// EXPORTS //

export default Engagement;
