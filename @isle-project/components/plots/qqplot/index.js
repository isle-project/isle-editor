// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import qnorm from '@stdlib/stats/base/dists/normal/quantile';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import quantile from '@isle-project/utils/statistic/quantile';
import { withPropCheck } from '@isle-project/utils/prop-check';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import zScore from '@isle-project/utils/zscore';
import ascending from './ascending.js';


// FUNCTIONS //

export function generateQQPlotConfig( y, variable, standardize ) {
	let annotations;
	let traces;

	y = y.filter( v => isNonMissingNumber( v ) );
	y = standardize ? zScore( y ) : y;
	const len = y.length;
	const yq = y.sort( ascending );
	const lowerQuartile = qnorm( 0.25, 0, 1 );
	const slope = ( qnorm( 0.75, 0, 1 ) - lowerQuartile ) / ( quantile( yq, 0.75 ) - quantile( yq, 0.25 ) );
	const intercept = lowerQuartile - slope * quantile( yq, 0.25 );

	const normalQuantiles = new Array( len );
	const f = len <= 10 ? 0.375 : 0.5;
	for ( let i = 0; i < len; i++ ) {
		normalQuantiles[ i ] = qnorm( ( i+1-f ) / ( len + (1-f)-f ), 0.0, 1.0 );
	}
	const linePoints = new Array( 2 );
	const ymin = yq[ 0 ];
	const ymax = yq[ yq.length-1 ];
	linePoints[ 0 ] = intercept + slope * ymin;
	linePoints[ 1 ] = intercept + slope * ymax;
	traces = [
		{
			y: yq,
			x: normalQuantiles,
			type: yq.length > 2000 ? 'scattergl' : 'scatter',
			mode: 'markers'
		},
		{
			y: [ ymin, ymax ],
			x: linePoints,
			mode: 'lines'
		}
	];
	const layout = {
		annotations,
		title: i18n.t('plotly:qqplot-title', { x: variable }),
		xaxis: {
			title: i18n.t('plotly:theoretical-quantiles'),
			range: [ normalQuantiles[ 0 ] - 0.3, normalQuantiles[ normalQuantiles.length-1 ] + 0.3 ]
		},
		yaxis: {
			title: i18n.t('plotly:sample-quantiles'),
			range: [ ymin - 1, ymax + 1 ]
		},
		showlegend: false
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

function QQPlot({ id, data, variable, standardize, action, onShare, onSelected }) {
	const { t } = useTranslation( 'plotly' );
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateQQPlotConfig( data[ variable ], variable, standardize );
	}, [ data, variable, standardize ] );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	return (
		<Plotly
			editable
			draggable
			id={id}
			fit
			meta={action}
			data={config.data}
			layout={config.layout}
			onShare={onShare}
			onSelected={( selected ) => {
				if ( onSelected ) {
					onSelected( variable, selected );
				}
			}}
		/>
	);
}


// PROPERTIES //

QQPlot.defaultProps = {
	standardize: false,
	onShare() {},
	onSelected() {}
};

QQPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	standardize: PropTypes.bool,
	onShare: PropTypes.func,
	onSelected: PropTypes.func
};


// EXPORTS //

/**
* A normal distribution QQ plot.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {boolean} standardize - controls whether to standardize the variable values
*/
export default withPropCheck( QQPlot );
