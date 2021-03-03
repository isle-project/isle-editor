// MODULES //

import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const TextArea = Loadable( () => import( /* webpackChunkName: "TextArea" */ './main.js' ) );


// EXPORTS //

export default TextArea;
