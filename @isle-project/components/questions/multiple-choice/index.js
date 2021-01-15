// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MultipleChoiceQuestion = Loadable( () => import( /* webpackChunkName: "MultipleChoiceQuestion" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceQuestion;
