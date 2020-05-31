// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Image = Loadable( () => import( /* webpackChunkName: "Image" */ './main.js' ) );


// EXPORTS //

export default Image;
