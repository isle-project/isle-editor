// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'SelectQuestion' );


// MAIN //

const SelectQuestion = Loadable( () => import( /* webpackChunkName: "SelectQuestion" */ './main.js' ) );


// EXPORTS //

export default SelectQuestion;
