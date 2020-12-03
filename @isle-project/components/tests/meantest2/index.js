// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Alert from 'react-bootstrap/Alert';
import ttest2 from '@stdlib/stats/ttest2';
import ztest2 from '@stdlib/stats/ztest2';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import replace from '@stdlib/string/replace';
import roundn from '@stdlib/math/base/special/roundn';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import stdev from '@isle-project/utils/statistic/stdev';
import TeX from '@isle-project/components/tex';
import escapeLatex from '@isle-project/utils/escape-latex';


// VARIABLES //

const debug = logger( 'isle:tests:meantest2' );
const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,-?[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[-?[\d.]+,Infinity\]/;


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

function retrieveGroupedValues( data, x, group ) {
	debug( 'Updating the variable when supplying groups...' );
	const categories = data[ group ];
	let firstCategory = categories[ 0 ];
	let secondCategory;
	for ( let i = 1; i < categories.length; i++ ) {
		if ( categories[ i ] !== firstCategory ) {
			secondCategory = categories[ i ];
			break;
		}
	}
	if ( isUndefinedOrNull( secondCategory ) ) {
		return null;
	}
	const splitted = bifurcateBy( data[ x ], function splitter( x, idx ) {
		return categories[ idx ] === firstCategory;
	});
	const xvalues = splitted[ 0 ];
	const yvalues = splitted[ 1 ];
	return {
		xvalues,
		yvalues,
		firstCategory,
		secondCategory
	};
}


// MAIN //

function MeanTest2({ data, x, y, group, xstdev, ystdev, type, diff, direction, alpha, showDecision }) {
	let out;
	if ( group ) {
		out = retrieveGroupedValues( data, x, group );
		if ( !out ) {
			return ( <Alert variant="danger" style={{ overflowX: 'auto', width: '100%' }}>
				Grouping variable <code>{group}</code> must have at least two different values.
			</Alert> );
		}
	} else {
		out = {
			xvalues: data[ x ],
			yvalues: data[ y ]
		};
	}
	const xd = out.xvalues;
	const yd = out.yvalues;
	const xvals = [];
	const yvals = [];
	for ( let i = 0; i < xd.length; i++ ) {
		if ( isNonMissingNumber( xd[ i ] ) ) {
			xvals.push( xd[ i ] );
		}
	}
	for ( let i = 0; i < yd.length; i++ ) {
		if ( isNonMissingNumber( yd[ i ] ) ) {
			yvals.push( yd[ i ] );
		}
	}
	let value;
	if ( group ) {
		let result;
		if ( type === 'Z Test' ) {
			xstdev = xstdev ? xstdev : stdev( xvals );
			ystdev = ystdev ? ystdev : stdev( yvals );
			result = ztest2( xvals, yvals, xstdev, ystdev, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
			});
		} else {
			result = ttest2( xvals, yvals, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
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
		const egrouping = escapeLatex( group );
		const ecat1 = escapeLatex( out.firstCategory );
		const ecat2 = escapeLatex( out.secondCategory );
		value = <div style={{ overflowX: 'auto', width: '100%' }}>
			<span className="title" >Hypothesis test for {x} between {group}:</span>
			<TeX
				displayMode
				raw={`H_0: \\mu_{\\text{${egrouping}:${ecat1}}} - \\mu_{\\text{${egrouping}:${ecat2}}} = ${diff}`}
				tag=""
			/>
			<span> vs. </span>
			<TeX
				displayMode
				raw={`H_1: \\mu_{\\text{${egrouping}:${ecat1}}} - \\mu_{\\text{${egrouping}:${ecat2}}} ${arrow} ${diff}`}
				tag=""
			/>
			<pre>
				{printout}
				<br />
				Sample mean in group &quot;{out.firstCategory}&quot;: {roundn( result.xmean, -3 )}
				<br />
				Sample mean in group &quot;{out.secondCategory}&quot;: {roundn( result.ymean, -3 )}
			</pre>
		</div>;
	} else if ( y ) {
		let result;
		if ( type === 'Z Test' ) {
			result = ztest2( xvals, yvals, xstdev, ystdev, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
			});
		} else {
			result = ttest2( xvals, yvals, {
				'alpha': alpha,
				'alternative': direction,
				'difference': diff
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
		const exvar = escapeLatex( x );
		const eyvar = escapeLatex( y );
		value = <div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Hypothesis test for {x} against {y}:</label>
			<TeX
				displayMode
				raw={`H_0: \\mu_{${exvar}} - \\mu_{${eyvar}} = ${diff}`}
				tag=""
			/>
			<span>vs.</span>
			<TeX
				displayMode
				raw={`\\; H_1: \\mu_{${exvar}} - \\mu_{${eyvar}} ${arrow} ${diff}`}
				tag=""
			/>
			<pre>
				{printout}
				<br />
				Sample mean in group &quot;{x}&quot;: {roundn( result.xmean, -3 )}
				<br />
				Sample mean in group &quot;{y}&quot;: {roundn( result.ymean, -3 )}
			</pre>
		</div>;
	}
	return value;
}


// PROPERTIES //

MeanTest2.defaultProps = {
	type: 'T Test',
	y: null,
	group: null,
	xstdev: null,
	ystdev: null,
	alpha: 0.05,
	direction: 'two-sided',
	diff: 0,
	showDecision: false
};

MeanTest2.propTypes = {
	data: PropTypes.object.isRequired,
	x: PropTypes.string.isRequired,
	y: PropTypes.string,
	group: PropTypes.string,
	type: PropTypes.oneOf([ 'T Test', 'Z Test' ]),
	xstdev: PropTypes.number,
	ystdev: PropTypes.number,
	alpha: PropTypes.number,
	direction: PropTypes.oneOf([ 'less', 'greater', 'two-sided' ]),
	diff: PropTypes.number,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* Two-sample mean test.
*
* @property {Object} data - object of value arrays
* @property {string} x - name of first variable
* @property {string} y - name of second variable (`y` or `group` have to be supplied)
* @property {string} group - name of grouping variable (`y` or `group` have to be supplied)
* @property {string} type - type of test (either `Z Test` or `T Test`)
* @property {number} xstdev - first standard deviation (for `Z Test`)
* @property {number} ystdev - second standard deviation (for `Z Test`)
* @property {number} alpha - significance level
* @property {string} direction - test direction (either `less`, `greater`, or `two-sided`)
* @property {number} diff - difference under H0
* @property {boolean} showDecision - controls whether to display if the null hypothesis is rejected at the specified significance level
*/
export default MeanTest2;
