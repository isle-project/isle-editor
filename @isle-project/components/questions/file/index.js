// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const FileQuestion = Loadable( () => import( /* webpackChunkName: "FileQuestion" */ './main.js' ) );


// EXPORTS //

export default FileQuestion;
