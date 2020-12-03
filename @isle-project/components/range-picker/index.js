// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


// MAIN //

const RangePicker = Loadable( () => import( /* webpackChunkName: "RangePicker" */ './main.js' ) );


// EXPORTS //

export default RangePicker;
