// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ImageQuestion = Loadable( () => import( /* webpackChunkName: "ImageQuestion" */ './main.js' ) );


// EXPORTS //

export default ImageQuestion;
