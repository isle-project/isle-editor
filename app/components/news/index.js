// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const News = Loadable( () => import( /* webpackChunkName: "News" */ './main.js' ) );


// EXPORTS //

export default News;
