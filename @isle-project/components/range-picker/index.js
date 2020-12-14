// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


// VARIABLES //

addResources( 'RangePicker' );


// MAIN //

const RangePicker = Loadable( () => import( /* webpackChunkName: "RangePicker" */ './main.js' ) );


// EXPORTS //

export default RangePicker;
