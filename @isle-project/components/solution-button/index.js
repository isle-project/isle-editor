// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const SolutionButton = Loadable( () => import( /* webpackChunkName: "SolutionButton" */ './main.js' ) );


// EXPORTS //

export default SolutionButton;
