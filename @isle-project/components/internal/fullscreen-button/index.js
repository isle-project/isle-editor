// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'FullscreenButton' );


// MAIN //

const FullscreenButton = Loadable( () => import( /* webpackChunkName: "FullscreenButton" */ './main.js' ) );


// EXPORTS //

export default FullscreenButton;
