// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const LearnImagePixelPicker = Loadable( () => import( /* webpackChunkName: "LearnImagePixelPicker" */ './main.js' ) );


// EXPORTS //

export default LearnImagePixelPicker;
