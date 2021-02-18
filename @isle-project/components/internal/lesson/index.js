// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';
import './lesson.css';


// VARIABLES //

addResources( 'Lesson' );


// MAIN //

const Lesson = Loadable( () => import( /* webpackChunkName: "Lesson" */ './main.js' ) );


// EXPORTS //

export default Lesson;
