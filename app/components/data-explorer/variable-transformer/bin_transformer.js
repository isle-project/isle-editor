// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
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
import NumberInput from '../../input/number/index.js';


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

/**
* Function to make shapes from breakpoints.
*/
const makeShapes = ( xBreaks ) => {
	const breakShapes = [];
	for ( let i = 0; i < xBreaks.length; i++ ) {
		breakShapes.push({
			type: 'line',
			x0: xBreaks[i],
			y0: -100,
			x1: xBreaks[i],
			y1: 100,
			line: {
				color: 'red',
				width: 3
			}
		});
	}
	return breakShapes;
};

const createCategoryNames = ( xBreaks, customNames ) => {
	const out = new Array( customNames.length );
	if ( customNames[ 0 ] ) {
		out[ 0 ] = customNames[ 0 ];
	} else {
		out[ 0 ] = `(-\u221E,${roundn( xBreaks[0], -2 )})`;
	}
	for ( let i = 1; i < customNames.length; i++ ) {
		if ( customNames[ i ] ) {
			out[ i ] = customNames[ i ];
		} else {
			out[ i ] = `[${roundn( xBreaks[i-1], -2 )},${roundn( xBreaks[i], -2)})`;
		}
	}
	const last = customNames.length - 1;
	if ( customNames[ last ] ) {
		out[ last ] = customNames[ last ];
	} else {
		out[ last ] = `[${roundn( xBreaks[ xBreaks.length - 1 ], -2)},\u221E)`;
	}
	return out;
};


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
		const xBreaks = [ mean( props.data[ props.continuous[0] ] ) ];
		const customNames = [ false, false ];
		this.state = {
			activeVar,
			configHist,
			xBreaks,
			name: '',
			catNames: createCategoryNames( xBreaks, customNames ),
			customNames: customNames
		};
		configHist.layout.shapes = makeShapes( xBreaks );
	}

	onChangeHistLine = ( data ) => {
		console.log( data );
		const keyUpdate = keys( data );
		const matches = RE_SHAPE.exec( keyUpdate[ 0 ] );
		if ( matches ) {
			const ind = matches[ 1 ];
			const xBreaks = copy( this.state.xBreaks );
			xBreaks[ ind ] = data[ keyUpdate[0] ];
			xBreaks.sort( ascending );
			const configHist = copy( this.state.configHist );
			configHist.layout.shapes = makeShapes( xBreaks );
			this.setState({
				configHist,
				xBreaks,
				catNames: createCategoryNames( xBreaks, this.state.customNames )
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
		const xBreaks = [ mean( this.props.data[ value ] ) ];
		configHist.layout.shapes = makeShapes( xBreaks );
		const customNames = [ false, false ];
		const catNames = createCategoryNames( xBreaks, customNames );
		this.setState({
			activeVar: value,
			configHist,
			xBreaks,
			catNames,
			customNames
		});
	}

	handleNameChange = ( event ) => {
		this.setState({
			name: event.target.value
		});
	}

	handleCatNamesFactory = ( ind ) => {
		return ( value ) => {
			const catNames = copy( this.state.catNames );
			catNames[ ind ] = value;
			const customNames = copy( this.state.customNames );
			customNames[ ind ] = value;
			this.setState({
				catNames,
				customNames
			});
		};
	}

	// factory method for an onClick for the clearButtons
	deleteBreak = ( ind ) => {
		return () => {
			const xBreaks = this.state.xBreaks;
			// remove the vars
			xBreaks.splice( ind, 1 );

			const catNames = this.state.catNames;
			catNames.splice( ind, 1 );

			const customNames = this.state.customNames;
			customNames.splice( ind, 1 );

			const configHist = copy( this.state.configHist );
			configHist.layout.shapes = makeShapes( xBreaks );

			this.setState({
				configHist,
				catNames,
				customNames,
				xBreaks
			});
		};
	}

	changeFactory( ind ) {
		return ( value ) => {
			console.log( 'Change break point...' );
			const xBreaks = copy( this.state.xBreaks );
			xBreaks[ ind ] = value;
			xBreaks.sort( ascending );
			const configHist = copy( this.state.configHist );
			configHist.layout.shapes = makeShapes( xBreaks );
			this.setState({
				configHist,
				xBreaks,
				catNames: createCategoryNames( xBreaks, this.state.customNames )
			});
		};
	}

	makeTextInputs = () => {
		const inputs = [];
		const xBreaks = this.state.xBreaks;
		const disableButton = xBreaks.length === 1;
		inputs.push(
			<div>
				<TextInput
					key={0}
					legend={<span><TeX
						raw="z < "
					/><NumberInput
						inline
						onChange={this.changeFactory( 0 )}
						defaultValue={roundn( xBreaks[0], -3 )}
					/></span>}
					defaultValue={this.state.catNames[ 0 ]}
					onChange={this.handleCatNamesFactory( 0 )}
					style={{ width: '95%', float: 'left' }}
				/>
			</div>
		);
		if ( xBreaks.length > 1 ) {
			for ( let i = 0; i < xBreaks.length - 1; i++ ) {
				const changeFn = this.handleCatNamesFactory( i+1 );
				inputs.push(
					<div>
						<TextInput
							key={1+i}
							legend={<span>
								<NumberInput
									inline
									onChange={this.changeFactory( i )}
									defaultValue={roundn( xBreaks[i], -3 )}
								/>
								<TeX raw="\le z <" />
								<NumberInput
									inline
									onChange={this.changeFactory( i+1 )}
									defaultValue={roundn( xBreaks[i+1], -3 )}
								/>
							</span>}
							defaultValue={this.state.catNames[ i+1 ]}
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
		const len = xBreaks.length;
		inputs.push(
			<div>
				<TextInput
					legend={<span>
						<TeX raw="z >" />
						<NumberInput
							inline
							onChange={this.changeFactory( len-1 )}
							defaultValue={roundn( xBreaks[ len-1 ], -3 )}
						/>
					</span>}
					defaultValue={this.state.catNames[ len ]}
					onChange={this.handleCatNamesFactory( len )}
					style={{ width: '95%', float: 'left' }}
					key={len}
				/>
				<ClearButton
					onClick={this.deleteBreak( len - 1 )}
					style={{ float: 'right', marginTop: '5px' }}
					disabled={disableButton}
				/>
			</div>
		);
		return inputs;
	}

	makeNewVar = () => {
		// loop over the data and label
		const newVar = [];
		const rawData = this.props.data[ this.state.activeVar ];
		const catNames = this.state.catNames;
		for ( let i = 0; i < rawData.length; i++ ) {
			let newLabel = null;
			let breakInd = 0;
			let val = rawData[i];
			while ( isNull( newLabel) ) {
				if ( breakInd >= catNames.length ) {
					newLabel = catNames[ catNames.length - 1 ];
				} else if ( val < this.state.xBreaks[ breakInd ] ) {
					newLabel = catNames[ breakInd ];
				} else {
					breakInd++;
				}
			}
			newVar.push( newLabel );
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

		const configHist = copy( this.state.configHist );
		configHist.layout.shapes = makeShapes( xBreaks );

		const customNames = this.state.customNames;
		customNames.push( false );

		this.setState({
			xBreaks,
			configHist,
			catNames: createCategoryNames( xBreaks, customNames )
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
							<FormControl
								type="text"
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
							<Card.Header>Choose labels for interval bins:</Card.Header>
							<Card.Body>
								{this.makeTextInputs()}
							</Card.Body>
						</Card>
					</div>
					<Button onClick={this.makeNewVar} disabled={this.state.name.length < 2}>
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
