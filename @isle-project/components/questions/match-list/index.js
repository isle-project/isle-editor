// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'MatchListQuestion' );


// MAIN //

const MatchListQuestion = Loadable( () => import( /* webpackChunkName: "MatchListQuestion" */ './main.js' ) );


// EXPORTS //

export default MatchListQuestion;
