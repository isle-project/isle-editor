// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import round from '@stdlib/math/base/special/round';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import tQuantile from '@stdlib/stats/base/dists/t/quantile';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import by from '@isle-project/utils/by';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import mean from '@isle-project/utils/statistic/mean.js';
import stdDev from '@isle-project/utils/statistic/stdev.js';


// FUNCTIONS //

/**
* Returns an adjusted significance level by controlling the false discovery rate.
*
* @private
* @param {Array<number>} pvalues - array of p-values
* @param {number} alpha - significance level
* @returns {number} adjusted significance level
*/
function adjustSignificanceLevel( pvalues, alpha ) {
	const m = pvalues.length;
	let adjustedAlpha = ( 1.0 / m ) * alpha;
	const sorted = pvalues.sort( ( a, b ) => {
		return a < b ? -1 : a > b ? 1 : 0;
	} );
	for ( let k = 1; k <= sorted.length; k++ ) {
		const pk = sorted[ k-1 ];
		if ( pk > ( k / m ) * alpha ) {
			break;
		}
		adjustedAlpha = ( k / m ) * alpha;
	}
	return adjustedAlpha;
}

export function generateIntervalPlotConfig({ data, variable, group, orientation, significanceLevel, multipleTestingAdjustment }) {
	let categoryarray;
	const trace = {
		type: 'scatter',
		mode: 'markers',
		name: variable
	};
	if ( !group ) {
		const values = data[ variable ];
		const nonmissing = [];
		for ( let i = 0; i < values.length; i++ ) {
			const v = values[ i ];
			if ( isNonMissingNumber( v ) ) {
				nonmissing.push( v );
			}
		}
		const xhat = mean( nonmissing );
		const sd = stdDev( nonmissing );
		const nq = tQuantile( 1.0 - ( significanceLevel / 2.0 ), nonmissing.length - 1 );
		const error = {
			type: 'data',
			array: [ nq * sd / sqrt( nonmissing.length ) ],
			visible: true
		};
		const trace = {
			type: 'scatter',
			mode: 'markers',
			name: variable
		};
		if ( orientation === 'horizontal' ) {
			trace.error_x = error;
			trace.x = [ xhat ];
			trace.y = [ 'Mean' ];
		} else {
			trace.error_y = error;
			trace.x = [ 'Mean' ];
			trace.y = [ xhat ];
		}
	}
	else {
		const stats = by( data[ variable ], data[ group ], values => {
			const nonmissing = [];
			for ( let i = 0; i < values.length; i++ ) {
				const v = values[ i ];
				if ( isNonMissingNumber( v ) ) {
					nonmissing.push( v );
				}
			}
			return [ mean( nonmissing ), stdDev( nonmissing ), nonmissing.length ];
		});
		const keys = extractUsedCategories( stats, group );
		const means = [];
		const errors = [];
		const pvalues = [];
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const [ mean, sd, n ] = stats[ key ];
			pvalues.push( 2.0 * tCDF( -abs( ( mean * sqrt( n ) ) / sd ), n - 1 ) );
		}
		if ( multipleTestingAdjustment ) {
			significanceLevel = adjustSignificanceLevel( pvalues, significanceLevel );
		}
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const [ mean, sd, n ] = stats[ key ];
			const nq = tQuantile( 1.0 - ( significanceLevel / 2.0 ), n - 1 );
			means.push( mean );
			errors.push( nq * sd / sqrt( n ) );
		}
		if ( orientation === 'horizontal' ) {
			trace.error_x = {
				type: 'data',
				array: errors,
				visible: true
			};
			trace.x = means;
			trace.y = keys;
		} else {
			trace.error_y = {
				type: 'data',
				array: errors,
				visible: true
			};
			trace.x = keys;
			trace.y = means;
		}
	}
	const layout = {
		title: i18n.t( 'plotly:intervalplot-title', { confidenceLevel: round( 100 * (1.0-significanceLevel) ) } ),
		xaxis: {
			title: orientation === 'vertical' ? group : variable,
			type: orientation === 'vertical' ? 'category' : null,
			showticklabels: ( group || orientation === 'horizontal' )
		},
		yaxis: {
			title: orientation === 'vertical' ? variable : group,
			type: orientation === 'horizontal' ? 'category' : null,
			showticklabels: ( group || orientation === 'vertical' )
		}
	};
	if ( categoryarray ) {
		if ( orientation === 'horizontal' ) {
			layout.yaxis.categoryorder = 'array';
			layout.yaxis.categoryarray = categoryarray;
		} else {
			layout.xaxis.categoryorder = 'array';
			layout.xaxis.categoryarray = categoryarray;
		}
	}
	const config = {
		data: [
			trace
		],
		layout
	};
	return config;
}


// MAIN //

/**
* An interval plot.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable(s) to display
* @property {(string|Factor)} group - grouping variable
* @property {string} orientation - `vertical` or `horizontal` orientation
* @property {number} significanceLevel - significance level
* @property {boolean} multipleTestingAdjustment - controls whether to adjust the significance level to control the false discovery rate
*/
const IntervalPlot = ({ data, variable, group, orientation, significanceLevel, multipleTestingAdjustment, id, action, onShare }) =>{
	const config = useMemo( () => {
		if ( !data || !variable ) {
			return {};
		}
		return generateIntervalPlotConfig({
			data,
			variable,
			group,
			orientation,
			significanceLevel,
			multipleTestingAdjustment
		});
	}, [ data, group, orientation, variable, significanceLevel, multipleTestingAdjustment ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
	if ( !variable ) {
		return <Alert variant="danger">{i18n.t('plotly:variable-missing')}</Alert>;
	}
	return ( <Plotly
		editable
		draggable
		id={id}
		fit
		data={config.data}
		layout={config.layout}
		meta={action}
		onShare={onShare}
	/> );
};


// PROPERTIES //

IntervalPlot.defaultProps = {
	group: null,
	orientation: 'vertical',
	significanceLevel: 0.05,
	multipleTestingAdjustment: false
};

IntervalPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	orientation: PropTypes.oneOf([ 'vertical', 'horizontal' ]),
	significanceLevel: PropTypes.number,
	multipleTestingAdjustment: PropTypes.bool
};


// EXPORTS //

export default withPropCheck( IntervalPlot );
