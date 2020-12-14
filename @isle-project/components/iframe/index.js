// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Iframe' );


// MAIN //

const Iframe = Loadable( () => import( /* webpackChunkName: "Iframe" */ './main.js' ) );


// EXPORTS //

export default Iframe;
