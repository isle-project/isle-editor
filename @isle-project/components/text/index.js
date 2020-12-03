// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Text = Loadable( () => import( /* webpackChunkName: "Text" */ './main.js' ) );


// EXPORTS //

export default Text;
