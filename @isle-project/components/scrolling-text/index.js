// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ScrollingText = Loadable( () => import( /* webpackChunkName: "ScrollingText" */ './main.js' ) );


// EXPORTS //

export default ScrollingText;
