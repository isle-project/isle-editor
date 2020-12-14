// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'NumberQuestion' );


// MAIN //

const NumberQuestion = Loadable( () => import( /* webpackChunkName: "NumberQuestion" */ './main.js' ) );


// EXPORTS //

export default NumberQuestion;
