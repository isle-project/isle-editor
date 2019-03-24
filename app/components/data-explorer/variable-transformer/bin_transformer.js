// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Plotly from 'components/plotly';
import SelectInput from 'components/input/select';
import mean from 'utils/statistic/mean.js';
import min from 'utils/statistic/min.js';
import max from 'utils/statistic/max.js';
import Modal from 'react-bootstrap/Modal';
import { generateHistogramConfig } from '../histogram.js';


// MAIN //

class BinTransformer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activeVar: props.continuous[ 0 ]
		};
	}

	render() {
		const histConfigSettings = {
			'data': this.props.data,
			'variable': this.state.activeVar,
			'group': null,
			'overlayDensity': true,
			'densityType': 'Data-driven',
			'chooseBins': false,
			'nBins': null
		};
		const vals = this.props.data[ this.state.activeVar ];
		const avg = mean( vals );
		const configHist = generateHistogramConfig( histConfigSettings );
		configHist.layout.shapes = [{
			type: 'line',
			x0: avg,
			y0: -100,
			x1: avg,
			y1: 100,
			line: {
				color: 'red',
				width: 3
			}
		}];
		configHist.layout.yaxis = {
			range: [
				min( configHist.data[ 1 ].y ),
				max( configHist.data[ 1 ].y )
			]
		};
		return (
			<Modal
				dialogClassName='modal-50w'
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Categorical Binning</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.activeVar}
						options={this.props.continuous}
						onChange={( value )=>{
							this.setState({
								activeVar: value
							});
						}}
					/>
					<div>
						<h5>Categorical Transformation</h5>
						<Plotly
							data={configHist.data}
							layout={configHist.layout}
							editable
							fit
							removeButtons
							legendButtons={false}
							onRelayout={( data ) => {
								console.log( data );
							}}
						/>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}


// PROPERTIES //

BinTransformer.defaultProps = {
};

BinTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	continuous: PropTypes.array.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default BinTransformer;
