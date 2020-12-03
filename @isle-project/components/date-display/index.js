// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const DateDisplay = Loadable( () => import( /* webpackChunkName: "DateDisplay" */ './main.js' ) );


// EXPORTS //

export default DateDisplay;
