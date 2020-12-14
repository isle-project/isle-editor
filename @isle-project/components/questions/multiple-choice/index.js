// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'MultipleChoiceQuestion' );


// MAIN //

const MultipleChoiceQuestion = Loadable( () => import( /* webpackChunkName: "MultipleChoiceQuestion" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceQuestion;
