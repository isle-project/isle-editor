// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import TeX from '@isle-project/components/tex';
import ztest from '@stdlib/stats/ztest';
import ttest from '@stdlib/stats/ttest';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import standardDeviation from '@isle-project/utils/statistic/stdev';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,-?[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[-?[\d.]+,Infinity\]/;


// FUNCTIONS //

/**
 * Extracts numeric, non-missing values from a data set.
 *
 * @param {Object} data - data set
 * @param {string} value - name of the value to extract
 * @returns {Array} numeric, non-missing values
 */
function extractValues( data, variable ) {
	// TODO: change function to return both array and counter of missing values
	const x = data[ variable ];
	const arr = [];
	if ( !x ) {
		return arr;
	}
	for ( let i = 0; i < x.length; i++ ) {
		if ( isNumber( x[ i ] ) && !isnan( x[ i ] ) ) {
			arr.push( x[ i ] );
		}
	}
	return arr;
}


// MAIN //

function MeanTest({ data, variable, type, stdev, alpha, direction, mu0, showDecision }) {
	const { t } = useTranslation( 'tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const xvalues = extractValues( data, variable );
	let sd;
	if ( type === 'Z Test' && stdev ) {
		sd = stdev;
	} else {
		sd = roundn( standardDeviation( xvalues ), -6 );
	}
	let result;
	if ( type === 'Z Test' ) {
		result = ztest( xvalues, sd, {
			'alpha': alpha,
			'alternative': direction,
			'mu': mu0
		});
	} else {
		result = ttest( xvalues, {
			'alpha': alpha,
			'alternative': direction,
			'mu': mu0
		});
	}
	let arrow = '\\ne';
	if ( direction === 'less' ) {
		arrow = '<';
	} else if ( direction === 'greater' ){
		arrow = '>';
	}
	let printout = result.print({
		decision: showDecision
	});
	printout = replace( printout, RE_ONESIDED_SMALLER, '' );
	printout = replace( printout, RE_ONESIDED_GREATER, '' );
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('hypothesis-test-for', { variable })}:</label>
			<TeX displayMode raw={`H_0: \\mu = ${mu0} \\; vs. \\; H_1: \\mu ${arrow} ${mu0}`} tag="" />
			<pre>
				{printout}
			</pre>
		</div>
	);
}


// PROPERTIES //

MeanTest.defaultProps = {
	type: 'T Test',
	stdev: null,
	alpha: 0.05,
	direction: 'two-sided',
	mu0: 0,
	showDecision: false
};

MeanTest.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	type: PropTypes.oneOf([ 'T Test', 'Z Test' ]),
	stdev: PropTypes.number,
	alpha: PropTypes.number,
	direction: PropTypes.oneOf([ 'less', 'greater', 'two-sided' ]),
	mu0: PropTypes.number,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* One-sample mean test.
*
* @property {Object} data - object of value arrays
* @property {string} variable - name of variable
* @property {string} type - type of test (`Z Test` or `T Test`)
* @property {number} stdev - standard deviation (for `Z Test`)
* @property {number} alpha - significance level
* @property {string} direction - test direction (either `less`, `greater`, or `two-sided`)
* @property {number} mu0 - mean under the null hypothesis
* @property {boolean} showDecision - controls whether to display if the null hypothesis is rejected at the specified significance level
*/
export default withPropCheck( MeanTest );
