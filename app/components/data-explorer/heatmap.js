// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import { generate } from 'randomstring';
import max from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import kde2d from '@stdlib/stats/kde2d';


// FUNCTIONS //

function calculateOpacity(nobs) {
	return max( 0.05, 0.6 - floor( nobs / 500 ) );
}

function toArrayArray( arr ) {
	const nRows = arr.shape[ 0 ];
	const nCols = arr.shape[ 1 ];
	const out = new Array( nRows );
	for ( let i = 0; i < nRows; i++ ) {
		const row = Array( nCols );
		for ( let j = 0; j < nCols; j++ ) {
			row[ j ] = arr.get( i, j );
		}
		out[ i ] = row;
	}
	return out;
}

export function generateHeatmap({ data, xval, yval, overlayPoints }) {
	var x = data[ xval ];
	var y = data[ yval ];
	var out = kde2d( x, y );
	var traces = [
		{
			x: out.x,
			y: out.y,
			z: toArrayArray( out.z ),
			type: 'heatmap',
			showscale: false,
			transpose: true
		}
	];
	if ( overlayPoints ) {
		const points = {
			x: x,
			y: y,
			mode: 'markers',
			name: 'points',
			marker: {
				color: 'white',
				opacity: calculateOpacity(x.length)
			},
			type: 'scatter'
		};
		traces.push( points );
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

class HeatMap extends Component {
	constructor( props ) {
		super( props );
	}

	generateHeatmap( xval, yval, overlayPoints ) {
		const config = generateHeatmap({ data: this.props.data, xval, yval, overlayPoints });
		const plotId = generate( 6 );
		const output ={
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <div>
				<label>{`${xval} against ${yval}`}: </label>
				<Plotly
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
						this.props.logAction( 'DATA_EXPLORER_SHARE:HEATMAP', {
							xval, yval, overlayPoints, plotId
						});
					}}
				/>
			</div>
		};
		this.props.logAction( 'DATA_EXPLORER:HEATMAP', {
			xval, yval, overlayPoints, plotId
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultX, defaultY } = this.props;
		return (
			<Dashboard autoStart={false} title="Heat Map" onGenerate={this.generateHeatmap.bind( this )}>
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

HeatMap.defaultProps = {
	defaultX: null,
	defaultY: null,
	logAction() {},
	session: {}
};


// PROPERTY TYPES //

HeatMap.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default HeatMap;
