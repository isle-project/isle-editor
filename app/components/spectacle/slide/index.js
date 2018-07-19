// MODULES //

import { Slide } from 'spectacle';


// MAIN //

Slide.propDescriptions = {
	align: 'Space delimited value for positioning interior content. The first value can be flex-start (left), center (middle), or flex-end (bottom). The second value can be flex-start (top) , center (middle), or flex-end (bottom)',
	transition: 'slide transition. Can be either `slide`, `zoom`, `fade`, or `spin` (or a combination)',
	transitionDuration: 'slide transition duration in milliseconds',
	notes: 'presenter mode notes',
	className: 'class name',
	style: 'CSS inline styles'
};


// EXPORTS //

export default Slide;
