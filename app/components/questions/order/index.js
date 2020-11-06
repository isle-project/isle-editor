// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const OrderQuestion = Loadable( () => import( /* webpackChunkName: "OrderQuestion" */ './main.js' ) );


// EXPORTS //

export default OrderQuestion;
