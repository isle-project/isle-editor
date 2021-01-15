// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Image = Loadable( () => import( /* webpackChunkName: "Image" */ './main.js' ) );


// EXPORTS //

export default Image;
