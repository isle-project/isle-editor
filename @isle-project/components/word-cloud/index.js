// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const WordCloud = Loadable( () => import( /* webpackChunkName: "WordCloud" */ './main.js' ) );


// EXPORTS //

export default WordCloud;
