// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LanguageSwitcher = Loadable( () => import( './main.js' ) );


// EXPORTS //

export default LanguageSwitcher;
