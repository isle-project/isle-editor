// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LessonSubmit = Loadable( () => import( /* webpackChunkName: "LessonSubmit" */ './main.js' ) );


// EXPORTS //

export default LessonSubmit;
