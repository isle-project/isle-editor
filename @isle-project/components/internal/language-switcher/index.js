// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LanguageSwitcher = Loadable( () => import( /* webpackChunkName: "LanguageSwitcher" */ './main.js' ) );


// EXPORTS //

export default LanguageSwitcher;
