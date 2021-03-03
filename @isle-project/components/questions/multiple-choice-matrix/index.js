// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const MultipleChoiceMatrix = Loadable( () => import( /* webpackChunkName: "MultipleChoiceMatrix" */ './main.js' ) );


// EXPORTS //

export default MultipleChoiceMatrix;
