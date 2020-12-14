// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'SelectQuestionMatrix' );


// MAIN //

const SelectQuestionMatrix = Loadable( () => import( /* webpackChunkName: "SelectQuestionMatrix" */ './main.js' ) );


// EXPORTS //

export default SelectQuestionMatrix;
