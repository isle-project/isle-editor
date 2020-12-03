// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LikertScale = Loadable( () => import( /* webpackChunkName: "LikertScale" */ './main.js' ) );


// EXPORTS //

export default LikertScale;
