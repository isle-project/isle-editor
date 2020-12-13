// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'TextEditor' );


// MAIN //

const TextEditor = Loadable( () => import( /* webpackChunkName: "TextEditor" */ './main.js' ) );


// EXPORTS //

export default TextEditor;
