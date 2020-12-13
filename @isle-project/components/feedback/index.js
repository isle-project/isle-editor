// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Feedback' );


// MAIN //

const Feedback = Loadable( () => import( /* webpackChunkName: "Feedback" */ './main.js' ) );


// EXPORTS //

export default Feedback;
