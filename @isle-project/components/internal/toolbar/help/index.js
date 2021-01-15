// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const HelpPage = Loadable( () => import( /* webpackChunkName: "HelpPage" */ './main.js' ) );


// EXPORTS //

export default HelpPage;
