// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'FreeTextQuestion' );


// MAIN //

const FreeTextQuestion = Loadable( () => import( /* webpackChunkName: "FreeTextQuestion" */ './main.js' ) );


// EXPORTS //

export default FreeTextQuestion;
