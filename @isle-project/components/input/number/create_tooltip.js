// MODULES //

import PINF from '@stdlib/constants/float64/pinf';
import NINF from '@stdlib/constants/float64/ninf';


// MAIN //

/**
 * Creates a tooltip for a number input.
 *
 * @param {Object} options - function options
 * @param {number} options.min - minimum value
 * @param {number} options.max - maximum value
 * @param {number} options.step - step size
 * @param {Function} options.t - translation function
 * @returns {string} tooltip
 */
function createTooltip({ min, max, step, t }) {
	let tooltip = `${t('enter')} ${ step === 1 ? t('integer') : t('number')} `;
	if ( max !== PINF && min !== NINF ) {
		tooltip += `${t('between')} ${min} ${t('and')} ${max}`;
	} else if ( min !== NINF ) {
		tooltip += `${t('larger-or-equal-to')} ${min}`;
	} else if ( max !== PINF ) {
		tooltip += `${t('smaller-or-equal-to')} ${max}`;
	}
	return tooltip;
}


// EXPORTS //

export default createTooltip;
