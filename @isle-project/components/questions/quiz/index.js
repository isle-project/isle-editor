// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Quiz' );


// MAIN //

const Quiz = Loadable( () => import( /* webpackChunkName: "Quiz" */ './main.js' ) );


// EXPORTS //

export default Quiz;
