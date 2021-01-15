// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const TextEditor = Loadable( () => import( /* webpackChunkName: "TextEditor" */ './main.js' ) );


// EXPORTS //

export default TextEditor;
