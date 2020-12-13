// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Citation' );


// MAIN //

const Citation = Loadable( () => import( /* webpackChunkName: "Citation" */ './main.js' ) );


// EXPORTS //

export default Citation;
