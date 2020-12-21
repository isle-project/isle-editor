// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnImagePixelPicker' );


// MAIN //

const LearnImagePixelPicker = Loadable( () => import( /* webpackChunkName: "LearnImagePixelPicker" */ './main.js' ) );


// EXPORTS //

export default LearnImagePixelPicker;
