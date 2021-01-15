// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const HintButton = Loadable( () => import( /* webpackChunkName: "HintButton" */ './main.js' ) );


// EXPORTS //

export default HintButton;
