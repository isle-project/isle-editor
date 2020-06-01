// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const LearnImagePixelPicker = Loadable( () => import( /* webpackChunkName: "LearnImagePixelPicker" */ './main.js' ) );


// EXPORTS //

export default LearnImagePixelPicker;
