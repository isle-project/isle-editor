// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Dashboard' );


// MAIN //

const Dashboard = Loadable( () => import( /* webpackChunkName: "Dashboard" */ './main.js' ) );


// EXPORTS //

export default Dashboard;
