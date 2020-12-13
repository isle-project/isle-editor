// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Pages' );


// MAIN //

const Pages = Loadable( () => import( /* webpackChunkName: "Pages" */ './main.js' ) );


// EXPORTS //

export default Pages;
