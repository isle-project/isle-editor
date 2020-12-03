// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Lesson = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Lesson;
