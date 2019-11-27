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

const DESCRIPTION = 'Statistical display for categorical data. The arc length of each slice in the pie is proportional to the quantity of the respective category. An alternative display for categorical data is a bar chart.';


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

export function generateQQPlotConfig({ data, variable }) {
	let annotations;
	let traces;

	const y = data[ variable ];
	const len = y.length;
	const yq = y.sort( ascending );

	const lowerQuartile = qnorm( 0.25, 0, 1 );
	const slope = ( qnorm( 0.75, 0, 1 ) - lowerQuartile ) / ( quantile( yq, 0.75 ) - quantile( yq, 0.25 ) );
	const intercept = lowerQuartile - slope * yq[ 24 ];

	const normalQuantiles = new Array( len );
	for ( let i = 0; i < normalQuantiles.length; i++ ) {
		normalQuantiles[ i ] = qnorm( (i+1)/100, 0.0, 1.0 );
	}
	const linePoints = new Array( 2 );
	const ymin = yq[ 0 ];
	const ymax = yq[ yq.length-1 ];
	linePoints[ 0 ] = intercept + slope * ymin;
	linePoints[ 1 ] = intercept + slope * ymax;
	traces = [
		{
			y: [ ymin, ymax ],
			x: linePoints,
			mode: 'lines'
		},
		{
			y: yq,
			x: normalQuantiles,
			mode: 'markers'
		}
	];

	const layout = {
		annotations,
		title: `Normal QQ Plot of ${variable}`,
		xaxis: {
			title: 'Theoretical Quantiles',
			range: [ normalQuantiles[ 0 ], normalQuantiles[ normalQuantiles.length-1 ] ]
		},
		yaxis: {
			title: 'Sample Quantiles',
			range: [ ymin, ymax ]
		},
		showlegend: false
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

class QQPlot extends Component {
	constructor( props ) {
		super( props );
	}

	generateQQPlot( variable ) {
		const config = generateQQPlotConfig({ data: this.props.data, variable });
		const plotId = randomstring( 6 );
		const action = {
			variable, plotId
		};
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly
				editable
				draggable
				id={plotId}
				fit
				meta={action}
				data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( DATA_EXPLORER_SHARE_QQPLOT, action );
				}}
			/>
		};
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

QQPlot.defaultProps = {
	defaultValue: null,
	logAction() {},
	session: {}
};

QQPlot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default QQPlot;
