// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ScrollingText = Loadable( () => import( /* webpackChunkName: "ScrollingText" */ './main.js' ) );


// EXPORTS //

export default ScrollingText;
