// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Text = Loadable( () => import( /* webpackChunkName: "Text" */ './main.js' ) );


// EXPORTS //

export default Text;
