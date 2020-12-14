// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'HintButton' );


// MAIN //

const HintButton = Loadable( () => import( /* webpackChunkName: "HintButton" */ './main.js' ) );


// EXPORTS //

export default HintButton;
