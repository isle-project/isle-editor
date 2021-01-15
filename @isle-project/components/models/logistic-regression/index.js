// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LogisticRegression = Loadable( () => import( /* webpackChunkName: "LogisticRegression" */ './main.js' ) );


// EXPORTS //

export default LogisticRegression;
