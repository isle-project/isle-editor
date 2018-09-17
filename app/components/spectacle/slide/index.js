// MODULES //

import { Slide } from 'spectacle';


// EXPORTS //

/**
* Spectacle presentation slide.
*
* @property {string} align - Space delimited value for positioning interior content. The first value can be flex-start (left), center (middle), or flex-end (bottom). The second value can be flex-start (top) , center (middle), or flex-end (bottom)
* @property {string} transition - slide transition. Can be either `slide`, `zoom`, `fade`, or `spin` (or a combination)
* @property {string} transitionDuration - slide transition duration in milliseconds
* @property {string} notes - presenter mode notes
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
export default Slide;
