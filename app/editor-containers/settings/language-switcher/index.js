// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales/editor';


// VARIABLES //

addResources( 'LanguageSwitcher' );


// MAIN //

const LanguageSwitcher = Loadable( () => import( /* webpackChunkName: "LanguageSwitcher" */ './main.js' ) );


// EXPORTS //

export default LanguageSwitcher;
