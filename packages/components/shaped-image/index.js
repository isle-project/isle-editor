// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ShapedImage = Loadable( () => import( /* webpackChunkName: "ShapedImage" */ './main.js' ) );


// EXPORTS //

export default ShapedImage;
