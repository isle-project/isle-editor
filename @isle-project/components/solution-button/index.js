// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'SolutionButton' );


// MAIN //

const SolutionButton = Loadable( () => import( /* webpackChunkName: "SolutionButton" */ './main.js' ) );


// EXPORTS //

export default SolutionButton;
