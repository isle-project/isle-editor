// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'QuestionForm' );


// MAIN //

const QuestionForm = Loadable( () => import( /* webpackChunkName: "QuestionForm" */ './main.js' ) );


// EXPORTS //

export default QuestionForm;
