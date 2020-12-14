// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Lesson' );


// MAIN //

const Lesson = Loadable( () => import( /* webpackChunkName: "Lesson" */ './main.js' ) );


// EXPORTS //

export default Lesson;
