// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Lesson = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default Lesson;
