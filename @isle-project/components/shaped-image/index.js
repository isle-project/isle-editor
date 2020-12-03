// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ShapedImage = Loadable( () => import( /* webpackChunkName: "ShapedImage" */ './main.js' ) );


// EXPORTS //

export default ShapedImage;
