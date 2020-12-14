// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'OrderQuestion' );


// MAIN //

const OrderQuestion = Loadable( () => import( /* webpackChunkName: "OrderQuestion" */ './main.js' ) );


// EXPORTS //

export default OrderQuestion;
