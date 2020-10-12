// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qnorm from '@stdlib/stats/base/dists/normal/quantile';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import quantile from 'utils/statistic/quantile';
import { DATA_EXPLORER_SHARE_QQPLOT, DATA_EXPLORER_QQPLOT } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A QQ (quantile-quantile) plot allows one to compare the distribution of a sample to a reference distribution (usually a normal distribution). Deviations from the plotted 45 degree reference line on the plot indicate how much the sample deviates from the reference distribution.';


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a
* @param {number} b
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}

export function generateQQPlotConfig( y, variable ) {
	let annotations;
	let traces;

	const len = y.length;
	const yq = y.sort( ascending );
	const lowerQuartile = qnorm( 0.25, 0, 1 );
	const slope = ( qnorm( 0.75, 0, 1 ) - lowerQuartile ) / ( quantile( yq, 0.75 ) - quantile( yq, 0.25 ) );
	const intercept = lowerQuartile - slope * quantile( yq, 0.25 );

	const normalQuantiles = new Array( len );
	for ( let i = 0; i < len - 1; i++ ) {
		normalQuantiles[ i ] = qnorm( (i+1)/len, 0.0, 1.0 );
	}
	normalQuantiles[ len-1 ] = qnorm( (len-1)/len, 0.0, 1.0 );
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
		title: `Normal QQ Plot of ${variable}`,
		xaxis: {
			title: 'Theoretical Quantiles',
			range: [ normalQuantiles[ 0 ] - 0.3, normalQuantiles[ normalQuantiles.length-1 ] + 0.3 ]
		},
		yaxis: {
			title: 'Sample Quantiles',
			range: [ ymin - 1, ymax + 1 ]
		},
		showlegend: false
	};
	return {
		layout,
		data: traces
	};
}

export function QQPlot({ id, data, variable, action, onShare }) {
	const config = generateQQPlotConfig( data[ variable ], variable );
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
		/>
	);
}


// MAIN //

class QQPlotMenu extends Component {
	constructor( props ) {
		super( props );
	}

	generateQQPlot( variable ) {
		const plotId = randomstring( 6 );
		const action = {
			variable, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_QQPLOT, action );
		};
		const output = <QQPlot data={this.props.data} variable={variable} id={plotId} action={action} onShare={onShare} />;
		this.props.logAction( DATA_EXPLORER_QQPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue } = this.props;
		return (
			<Dashboard
				title={<span>QQ Plot<QuestionButton title="QQ Plot" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.generateQQPlot.bind( this )}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

QQPlotMenu.defaultProps = {
	defaultValue: null,
	logAction() {},
	session: {}
};

QQPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default QQPlotMenu;
