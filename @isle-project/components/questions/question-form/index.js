// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const QuestionForm = Loadable( () => import( /* webpackChunkName: "QuestionForm" */ './main.js' ) );


// EXPORTS //

export default QuestionForm;
