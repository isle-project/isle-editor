// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';


// MAIN //

class MosaicPlot extends Component {

	constructor( props ) {
		super( props );
	}

	generateMosaicPlot( xval, yval, overlayPoints ) {

		let code = `x = c(${this.props.data[ xval ]})
			y = c(${this.props.data[ yval ]})
			xytable = table( x, y )
			mosaicplot( xytable )`;

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
		this.props.logAction( 'DATA_EXPLORER:MOSAIC', {
			xval, yval, overlayPoints
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultX, defaultY } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Mosaic Plot"
				onGenerate={this.generateMosaicPlot.bind( this )}
			>
				<SelectInput
					legend="First Variable"
					defaultValue={defaultX || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Second Variable"
					defaultValue={defaultY || variables[ 1 ]}
					options={variables}
				/>
				<CheckboxInput
					legend="Show Colors"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

MosaicPlot.defaultProps = {
	defaultX: null,
	defaultY: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

MosaicPlot.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default MosaicPlot;
