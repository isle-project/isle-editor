// MODULES //

import Loadable from 'internal-components/loadable';


// MAIN //

const Lesson = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Lesson;
