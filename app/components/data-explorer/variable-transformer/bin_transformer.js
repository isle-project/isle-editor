// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Plotly from 'components/plotly';
import SelectInput from 'components/input/select';
import TextInput from 'components/input/text';
import mean from 'utils/statistic/mean.js';
import min from 'utils/statistic/min.js';
import max from 'utils/statistic/max.js';
import Modal from 'react-bootstrap/Modal';
import TeX from 'components/tex';
import keys from '@stdlib/utils/keys';
import roundn from '@stdlib/math/base/special/roundn';
import copy from '@stdlib/utils/copy';
import isNull from '@stdlib/assert/is-null';
import { generateHistogramConfig } from '../histogram.js';
import ClearButton from '../clear_button.js';


// VARIABLES //

const RE_SHAPE = /shapes\[(\d)\]\.x0/;


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

class BinTransformer extends Component {
	constructor( props ) {
		super( props );

		const activeVar = props.continuous[ 0 ];
		const histConfigSettings = {
			'data': props.data,
			'variable': activeVar,
			'group': null,
			'overlayDensity': true,
			'densityType': 'Data-driven',
			'chooseBins': false,
			'nBins': null
		};
		const configHist = generateHistogramConfig( histConfigSettings );
		configHist.layout.yaxis = {
			range: [
				min( configHist.data[ 1 ].y ),
				max( configHist.data[ 1 ].y )
			]
		};
		this.state = {
			activeVar,
			configHist,
			xBreaks: [ mean( props.data[ props.continuous[0] ] ) ],
			name: null,
			catNames: [ 'x0', 'x1' ]
		};
		configHist.layout.shapes = this.makeShapes();
	}

	onChangeHistLine = ( data ) => {
		const keyUpdate = keys( data );
		const matches = RE_SHAPE.exec( keyUpdate[0] );
		if ( matches ) {
			const ind = matches[ 1 ];
			const newBreaks = copy( this.state.xBreaks );
			newBreaks[ ind ] = data[ keyUpdate[0] ];
			newBreaks.sort( ascending );
			this.setState({
				xBreaks: newBreaks
			});
		}
	}

	handleVariableChange = ( value ) => {
		console.log( 'Change variable to bin...' );
		const histConfigSettings = {
			'data': this.props.data,
			'variable': value,
			'group': null,
			'overlayDensity': true,
			'densityType': 'Data-driven',
			'chooseBins': false,
			'nBins': null
		};
		const configHist = generateHistogramConfig( histConfigSettings );
		configHist.layout.yaxis = {
			range: [
				min( configHist.data[ 1 ].y ),
				max( configHist.data[ 1 ].y )
			]
		};
		this.setState({
			activeVar: value,
			configHist,
			xBreaks: [ mean( this.props.data[ value ] ) ],
			catNames: [ 'x0', 'x1' ]
		}, () => {
			configHist.layout.shapes = this.makeShapes();
		});
	}

	handleNameChange = ( value ) => {
		this.setState({
			name: value
		});
	}

	handleCatNamesFactory = ( ind ) => {
		return ( value ) => {
			var newNames = copy(this.state.catNames);
			newNames[ ind ] = value;
			this.setState({
				catNames: newNames
			}, () => {
				console.log(this.state.catNames);
			});
		};
	}

	// factory method for an onClick for the clearButtons
	deleteBreak = ( ind ) => {
		return () => {
			var oldVals = this.state.xBreaks;
			// remove the vars
			oldVals.splice(ind, 1);

			var oldNames = this.state.catNames;
			oldNames.splice(ind, 1);
			this.setState({
				catNames: oldNames,
				xBreaks: oldVals
			}, () => {
				console.log(this.state.xBreaks);
			});
		};
	}

	makeTextInputs = () => {
		const inputs = [];
		const disableButton = this.state.xBreaks.length === 1;
		inputs.push(
			<div>
				<TextInput
					key={0}
					legend={<TeX raw={`z < ${roundn(this.state.xBreaks[0], -3)}`} />}
					defaultValue={`(-\u221E,${roundn(this.state.xBreaks[0], -2)})`}
					onChange={this.handleCatNamesFactory(0)}
					style={{ width: '95%', float: 'left' }}
				/>
			</div>
		);
		if ( this.state.xBreaks.length > 1 ) {
			for ( let i = 0; i < this.state.xBreaks.length - 1; i++ ) {
				const changeFn = this.handleCatNamesFactory(i);
				inputs.push(
					<div>
						<TextInput
							key={1+i}
							legend={<TeX raw={`${roundn(this.state.xBreaks[i], -3)} \\le z < ${roundn(this.state.xBreaks[i + 1], -3)}`} />}
							defaultValue={`[${roundn(this.state.xBreaks[i], -2)}, ${roundn(this.state.xBreaks[i + 1], -2)})`}
							onChange={changeFn}
							style={{ width: '95%', float: 'left' }}
						/>
						<ClearButton
							onClick={this.deleteBreak(i)}
							style={{ float: 'right', marginTop: '5px' }}
							disabled={disableButton}
						/>
					</div>
				);
			}
		}
		// push the last
		inputs.push(
			<div>
				<TextInput
					legend={<TeX raw={`z > ${roundn(this.state.xBreaks[this.state.xBreaks.length - 1], -3)}`} />}
					defaultValue={`[${roundn(this.state.xBreaks[this.state.xBreaks.length - 1], -2)},\u221E)`}
					onChange={this.handleCatNamesFactory( this.state.xBreaks.length - 1 )}
					style={{ width: '95%', float: 'left' }}
					key={this.state.xBreaks.length}
				/>
				<ClearButton
					onClick={this.deleteBreak(this.state.xBreaks.length - 1)}
					style={{ float: 'right', marginTop: '5px' }}
					disabled={disableButton}
				/>
			</div>
		);
		return inputs;
	}

	// function to make shapes from the breakpoints
	makeShapes = () => {
		var breakShapes = [];
		for ( let i = 0; i < this.state.xBreaks.length; i++ ) {
			breakShapes.push({
				type: 'line',
				x0: this.state.xBreaks[i],
				y0: -100,
				x1: this.state.xBreaks[i],
				y1: 100,
				line: {
					color: 'red',
					width: 3
				}
			});
		}
		return breakShapes;
	}

	makeNewVar = () => {
		// loop over the data and label
		var newVar = [];
		var rawData = this.props.data[ this.state.activeVar ];
		for ( let i = 0; i < rawData.length; i++ ) {
			let newLabel = null;
			let breakInd = 0;
			let val = rawData[i];
			while ( isNull( newLabel) ) {
				if ( breakInd >= this.state.catNames.length ) {
					newLabel = this.state.catNames[this.state.catNames.length - 1];
				} else if ( val < this.state.xBreaks[breakInd] ) {
					newLabel = this.state.catNames[breakInd];
				} else {
					breakInd++;
				}
			}
			newVar.push(newLabel);
		}
		this.props.onGenerate( this.state.name, newVar );
		this.props.onHide();
	}

	addNewBreakPoint = () => {
		var xBreaks = copy( this.state.xBreaks );
		const vals = this.props.data[ this.state.activeVar ];
		const avg = mean( vals );
		xBreaks.push( avg );
		xBreaks.sort( ascending );

		const configHist = this.state.configHist;
		this.setState({
			xBreaks,
			configHist
		}, () => {
			configHist.layout.shapes = this.makeShapes();
		});
	}

	render() {
		const configHist = this.state.configHist;
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
					<Row>
						<Col md={6}>
							<SelectInput
								legend="Variable to bin:"
								defaultValue={this.state.activeVar}
								options={this.props.continuous}
								onChange={this.handleVariableChange}
							/>
						</Col>
						<Col md={6}>
							<label>Binned Variable</label>
							<TextInput
								legend="Variable Name"
								placeholder="Select name..."
								onChange={this.handleNameChange}
							/>
						</Col>
					</Row>
					<div>
						<Button className="insert-line-button" onClick={this.addNewBreakPoint}>
							Insert break line
						</Button>
						<Plotly
							data={configHist.data}
							layout={configHist.layout}
							editable
							fit
							removeButtons
							legendButtons={false}
							onRelayout={this.onChangeHistLine}
						/>
					</div>
					<div>
						<Card className="mb-2" >
							<Card.Header>Generate new variables:</Card.Header>
							<Card.Body>
								{this.makeTextInputs()}
							</Card.Body>
						</Card>
					</div>
					<Button onClick={this.makeNewVar}>
						Create new variable
					</Button>
				</Modal.Body>
			</Modal>
		);
	}
}


// PROPERTIES //

BinTransformer.defaultProps = {
	onGenerate() {}
};

BinTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	continuous: PropTypes.array.isRequired,
	onHide: PropTypes.func.isRequired,
	onGenerate: PropTypes.func
};


// EXPORTS //

export default BinTransformer;
