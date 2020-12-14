// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'HelpPage' );


// MAIN //

const HelpPage = Loadable( () => import( /* webpackChunkName: "HelpPage" */ './main.js' ) );


// EXPORTS //

export default HelpPage;
