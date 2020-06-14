// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const QuestionForm = Loadable( () => import( /* webpackChunkName: "QuestionForm" */ './main.js' ) );


// EXPORTS //

export default QuestionForm;
