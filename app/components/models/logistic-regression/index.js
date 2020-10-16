// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LogisticRegression = Loadable( () => import( /* webpackChunkName: "LogisticRegression" */ './main.js' ) );


// EXPORTS //

export default LogisticRegression;
