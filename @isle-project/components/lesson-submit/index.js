// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LessonSubmit' );


// MAIN //

const LessonSubmit = Loadable( () => import( /* webpackChunkName: "LessonSubmit" */ './main.js' ) );


// EXPORTS //

export default LessonSubmit;
