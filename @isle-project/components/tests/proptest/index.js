// MODULES //

import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import TeX from '@isle-project/components/tex';
import ztest from '@stdlib/stats/ztest';
import sqrt from '@stdlib/math/base/special/sqrt';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import mean from '@isle-project/utils/statistic/mean';
import { addResources } from '@isle-project/locales';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// VARIABLES //

addResources( 'Tests' );
const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,-?[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[-?[\d.]+,Infinity\]/;


// MAIN //

function PropTest({ data, variable, alpha, direction, success, p0, showDecision }) {
	const { t } = useTranslation( 'Tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const x = data[ variable ];
	const binary = x.map( x => x === success ? 1 : 0 );
	const result = ztest( binary, sqrt( p0 * ( 1.0 - p0 ) ), {
		'alpha': alpha,
		'alternative': direction,
		'mu': p0
	});
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
	printout = replace( printout, 'true mean', 'true proportion' );
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('hypothesis-test-for', { variable } )}</label>
			<p>
				<Trans i18nKey="probtest-success-prob" ns="Test" >
					Let p be the population probability of <code>{variable}</code> being <code>{success}</code>.
				</Trans>
			</p>
			<span>
				{t('we-test')}
			</span>
			<TeX displayMode raw={`H_0: p = ${p0} \\; vs. \\; H_1: p ${arrow} ${p0}`} tag="" />
			<label>{t('sample-proportion')}: {roundn( mean( binary ), -3 )}</label>
			<pre>
				{printout}
			</pre>
		</div>
	);
}


// PROPERTIES //

PropTest.defaultProps = {
	alpha: 0.05,
	direction: 'two-sided',
	p0: 0.5,
	showDecision: false
};

PropTest.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	success: PropTypes.any.isRequired,
	alpha: PropTypes.number,
	direction: PropTypes.oneOf([ 'less', 'greater', 'two-sided' ]),
	p0: PropTypes.number,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* One-sample proportion test.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} variable - name of variable
* @property {*} success - success category of `variable`
* @property {number} alpha - significance level
* @property {string} direction - test direction (either `less`, `greater`, or `two-sided`)
* @property {number} p0 - proportion under the null hypothesis
* @property {boolean} showDecision - controls whether to display if the null hypothesis is rejected at the specified significance level
*/
export default withPropCheck( PropTest );
