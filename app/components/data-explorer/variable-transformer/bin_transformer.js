// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import { generateHistogramConfig } from '../histogram.js';
import { isNull } from 'util';


// MAIN //

class BinTransformer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activeVar: props.continuous[ 0 ],
			xBreaks: [ mean( props.data[props.continuous[0]] ) ],
			name: null,
			catNames: [ 'x0', 'x1' ],

		};
	}

	onChangeHistLine = ( data ) => {
		var keyUpdate = keys( data );
		const RE_SHAPE = /shapes\[(\d)\]\.x0/;
		const ind = RE_SHAPE.exec(keyUpdate[0])[1];
		var newBreaks = copy( this.state.xBreaks );
		newBreaks[ind] = data[ keyUpdate[0] ];
		newBreaks.sort( (a, b) => { return( a - b ) } );
		console.log(newBreaks);
		this.setState({
			xBreaks: newBreaks
		});
	}

	handleNameChange = ( value ) => {
		this.setState({
			name: value
		});
	}

	handleCatNamesFactory = ( ind ) => {
		return( ( value ) => {
			var newNames = copy(this.state.catNames);
			newNames[ ind ] = value;
			this.setState({
				catNames: newNames
			}, () => {
				console.log(this.state.catNames);
			});
		} )
	}

	makeTextInputs = () => {
		var inputs = [];
		// first point
		inputs.push(
			<TextInput 
				legend={<TeX raw={`z < ${roundn(this.state.xBreaks[0], -3)}`} />} 
				placeholder="Select label..."
				onChange={this.handleCatNamesFactory(0)}
				width={'50%'}
			/>
		);
		if ( this.state.xBreaks.length > 1 ) {
			for ( let i = 0; i < this.state.xBreaks.length - 1; i++ ) {
				const changeFn = this.handleCatNamesFactory(i);
				inputs.push(
					<TextInput 
						legend={<TeX raw={`${roundn(this.state.xBreaks[i], -3)} \\le z < ${roundn(this.state.xBreaks[i + 1], -3)}`} />} 
						placeholder="Select label..."
						onChange={changeFn}
						width={'50%'}
					/>
				);
			}
		}
		// push the last
		inputs.push(
			<TextInput 
				legend={<TeX raw={`z > ${roundn(this.state.xBreaks[this.state.xBreaks.length - 1], -3)}`} />} 
				placeholder="Select label..."
				onChange={this.handleCatNamesFactory(this.state.xBreaks.length - 1)}
				width={'50%'}
			/>
		);
		
		return(inputs);
	}

	// function to make shapes from the breakpoints
	makeShapes = () => {
		var breakShapes = [];
		for ( let i = 0; i < this.state.xBreaks.length; i++ ) {
			breakShapes.push(
				{
					type: 'line',
					x0: this.state.xBreaks[i],
					y0: -100,
					x1: this.state.xBreaks[i],
					y1: 100,
					line: {
						color: 'red',
						width: 3
					}
				}
			);
		}
		return( breakShapes );
	}

	makeNewVar = () => {
		// loop over the data and label
		var newVar = [];
		var rawData = this.props.data[this.state.activeVar];
		for ( let i = 0; i < rawData.length; i++ ) {
			let newLabel = null;
			let breakInd = 0;
			let val = rawData[i];
			while ( isNull( newLabel) ) {
				if ( breakInd >= this.state.catNames.length ) {
					newLabel = this.state.catNames[this.state.catNames.length - 1];
				} else  if ( val < this.state.xBreaks[breakInd] ) {
					newLabel = this.state.catNames[breakInd];
				} else {
					breakInd++;
				}
			}
			newVar.push(newLabel);
		}
		this.props.onGenerate(this.state.name, newVar);
		this.props.onHide();
	}

	addNewBreakPoint = () => {
		var newBreaks = copy( this.state.xBreaks );
		const vals = this.props.data[ this.state.activeVar ];
		const avg = mean( vals );
		newBreaks.push(avg);
		// now to sort the data
		newBreaks.sort( (a, b) => { return(a - b) } );
		this.setState({
			xBreaks: newBreaks
		});
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
		const configHist = generateHistogramConfig( histConfigSettings );
		configHist.layout.shapes = this.makeShapes();
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
						id="varSelect"
						legend="Variable:"
						defaultValue={this.state.activeVar}
						options={this.props.continuous}
						onChange={( value )=>{
							this.setState({
								activeVar: value
							});
						}}
					/>
					<TextInput legend="Variable Name" placeholder="Select name..." onChange={this.handleNameChange} width={'50%'} />
					<div>
						<Button onClick={this.addNewBreakPoint}>
							Add new lines
						</Button>
						<h5>Categorical Transformation</h5>
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
};

BinTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	continuous: PropTypes.array.isRequired,
	onHide: PropTypes.func.isRequired,
	onGenerate: PropTypes.func.isRequired
};


// EXPORTS //

export default BinTransformer;
