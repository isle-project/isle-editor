// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const WordCloud = Loadable( () => import( /* webpackChunkName: "WordCloud" */ './main.js' ) );


// EXPORTS //

export default WordCloud;
