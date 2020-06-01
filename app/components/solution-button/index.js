// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const SolutionButton = Loadable( () => import( /* webpackChunkName: "SolutionButton" */ './main.js' ) );


// EXPORTS //

export default SolutionButton;
