// MODULES //

import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';


// MAIN //

function createTooltip( props ) {
	let tooltip = `Enter a${ props.step === 1 ? 'n integer' : ' number'} `;
	if ( props.max !== PINF && props.min !== NINF ) {
		tooltip += `between ${props.min} and ${props.max}`;
	} else if ( props.min !== NINF ) {
		tooltip += `larger or equal to ${props.min}`;
	} else if ( props.max !== PINF ) {
		tooltip += `smaller or equal to ${props.max}`;
	}
	return tooltip;
}


// EXPORTS //

export default createTooltip;
