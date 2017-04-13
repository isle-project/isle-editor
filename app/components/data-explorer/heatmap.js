// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';


// MAIN //

class HeatMap extends Component {

	constructor( props ) {
		super( props );
	}

	generateHeatmap( xval, yval, overlayPoints ) {

		let code = `x = c(${this.props.data[ xval ]})
			y = c(${this.props.data[ yval ]})
			f1 <- kde2d( x, y )
			image( f1, xlab="${xval}", ylab="${yval}")`;

		if ( overlayPoints ) {
			code += '\n points( x, y, col="grey" )';
		}

		let output ={
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <div>
				<label>{`${xval} against ${yval}`}: </label>
				<RPlot
					code={code}
					libraries={[ 'MASS' ]}
					onDone={this.props.onPlotDone}
				/>
			</div>
		};
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
	onPlotDone() {}
};


// PROPERTY TYPES //

HeatMap.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default HeatMap;
