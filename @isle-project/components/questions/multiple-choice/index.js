// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const MultipleChoiceQuestion = Loadable( () => import( /* webpackChunkName: "MultipleChoiceQuestion" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceQuestion;
