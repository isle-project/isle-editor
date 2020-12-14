// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Panel' );


// MAIN //

const Panel = Loadable( () => import( /* webpackChunkName: "Panel" */ './main.js' ) );


// EXPORTS //

export default Panel;
