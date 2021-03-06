// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import './lesson.css';


// MAIN //

const Lesson = Loadable( () => import( /* webpackChunkName: "Lesson" */ './main.js' ) );


// EXPORTS //

export default Lesson;
