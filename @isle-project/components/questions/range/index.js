// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'RangeQuestion' );


// MAIN //

const RangeQuestion = Loadable( () => import( /* webpackChunkName: "RangeQuestion" */ './main.js' ) );


// EXPORTS //

export default RangeQuestion;
