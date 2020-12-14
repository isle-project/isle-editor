// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'ImageQuestion' );


// MAIN //

const ImageQuestion = Loadable( () => import( /* webpackChunkName: "ImageQuestion" */ './main.js' ) );


// EXPORTS //

export default ImageQuestion;
