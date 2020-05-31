// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const RangePicker = Loadable( () => import( /* webpackChunkName: "RangePicker" */ './main.js' ) );


// EXPORTS //

export default RangePicker;
