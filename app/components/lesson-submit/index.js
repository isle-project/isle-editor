// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LessonSubmit = Loadable( () => import( /* webpackChunkName: "LessonSubmit" */ './main.js' ) );


// EXPORTS //

export default LessonSubmit;
