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
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import { DATA_EXPLORER_BIN_TRANSFORMER } from 'constants/actions.js';
import { generateHistogramConfig } from '../histogram.js';
import retrieveBinnedValues from './retrieve_binned_values.js';
import ClearButton from '../clear_button.js';
import NumberInput from '../../input/number/index.js';
import './bin_transformer.css';


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
		let values = props.data[ props.continuous[0] ];
		values = values.filter( x => isNumber( x ) && !isnan( x ) );
		const xBreaks = [ mean( values ) ];
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
		let values = this.props.data[ value ];
		values = values.filter( x => isNumber( x ) && !isnan( x ) );
		const xBreaks = [ mean( values ) ];
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
						raw="x < "
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
								<TeX raw="\le x <" />
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
						<TeX raw="x >" />
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
		const { name, activeVar, catNames, xBreaks } = this.state;
		const rawData = this.props.data[ activeVar ];
		const values = retrieveBinnedValues( rawData, catNames, xBreaks );
		this.props.logAction( DATA_EXPLORER_BIN_TRANSFORMER, {
			name,
			variable: activeVar,
			breaks: xBreaks,
			catNames: catNames
		});
		this.props.onGenerate( name, values );
		this.props.onHide();
	}

	addNewBreakPoint = () => {
		var xBreaks = copy( this.state.xBreaks );
		let vals = this.props.data[ this.state.activeVar ];
		vals = vals.filter( x => isNumber( x ) && !isnan( x ) );
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
				dialogClassName='modal-75w input'
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Binning of Quantitative Variables</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SelectInput
						legend="Variable to bin:"
						defaultValue={this.state.activeVar}
						options={this.props.continuous}
						onChange={this.handleVariableChange}
						style={{ maxWidth: 400 }}
					/>
					<Button className="insert-line-button" onClick={this.addNewBreakPoint}>
						Insert break line
					</Button>
					<div>
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
				</Modal.Body>
				<Modal.Footer>
					<Row>
						<Col>
							<label>Generated variable:</label>
						</Col>
						<Col>
							<FormControl
								type="text"
								placeholder="Select name..."
								onChange={this.handleNameChange}
							/>
						</Col>
						<Col>
							<Button onClick={this.makeNewVar} disabled={this.state.name.length < 2}>
								Create new variable
							</Button>
						</Col>
					</Row>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTIES //

BinTransformer.defaultProps = {
	logAction() {},
	onGenerate() {}
};

BinTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	continuous: PropTypes.array.isRequired,
	logAction: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	onGenerate: PropTypes.func
};


// EXPORTS //

export default BinTransformer;
