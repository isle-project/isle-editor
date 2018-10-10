// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import max from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A contour plot can be used to display the joint distribution of two quantitative variables. It plots a three-dimensional surface by plotting constant slices, called contours, on a two-dimensional grid.';


// FUNCTIONS //

function calculateOpacity(nobs) {
	return max( 0.05, 0.6 - floor( nobs / 500 ) );
}

export function generateContourChart({ data, xval, yval, overlayPoints }) {
	var x = data[xval];
	var y = data[yval];
	var trace1 = {
		x: x,
		y: y,
		mode: 'density',
		type: 'histogram2dcontour',
		colorscale: 'YIOrRd',
		showscale: false,
		reversescale: true
	};
	var traces = [ trace1 ];
	if ( overlayPoints ) {
		var trace2 = {
			x: x,
			y: y,
			mode: 'markers',
			name: 'points',
			marker: {
				color: '#1f77b4',
				opacity: calculateOpacity(x.length)
			},
			type: 'scatter'
		};
		traces.push(trace2);
	}

	let layout = {
		title: `${xval} vs. ${yval}`,
		xaxis: {
			showgrid: true,
			zeroline: true,
			title: xval
		},
		yaxis: {
			showgrid: true,
			zeroline: true,
			title: yval
		}
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

class ContourChart extends Component {
	constructor( props ) {
		super( props );
	}

	generateContourChart( xval, yval, overlayPoints ) {
		const config = generateContourChart({ data: this.props.data, xval, yval, overlayPoints });
		const plotId = randomstring( 6 );
		const output = {
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <Plotly
				editable
				fit
				id={plotId}
				data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( 'DATA_EXPLORER_SHARE:CONTOURPLOT', {
						xval, yval, overlayPoints, plotId
					});
				}}
			/>
		};
		this.props.logAction( 'DATA_EXPLORER:CONTOURPLOT', {
			xval, yval, overlayPoints, plotId
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultX, defaultY } = this.props;
		return (
			<Dashboard autoStart={false} title={<span>Contour Chart<QuestionButton title="Contour Chart" content={DESCRIPTION} /></span>} onGenerate={this.generateContourChart.bind( this )}>
				<SelectInput
					legend="Variable on x-axis:"
					defaultValue={defaultX || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Variable on y-axis:"
					defaultValue={defaultY || variables[ 1 ]}
					options={variables}
				/>
				<CheckboxInput
					legend="Overlay observations"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

ContourChart.defaultProps = {
	defaultX: null,
	defaultY: null,
	logAction() {},
	session: {}
};


// PROPERTY TYPES //

ContourChart.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ContourChart;
