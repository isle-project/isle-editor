// MODULES //

import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';


// VARIABLES //

addResources( 'Input' );


// MAIN //

const TextInput = Loadable( () => import( /* webpackChunkName: "TextInput" */ './main.js' ) );


// EXPORTS //

export default TextInput;
