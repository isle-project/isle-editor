// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const Dashboard = Loadable( () => import( /* webpackChunkName: "Dashboard" */ './main.js' ) );


// EXPORTS //

export default Dashboard;
