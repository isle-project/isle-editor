// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import copy from '@stdlib/utils/copy';
import isNull from '@stdlib/assert/is-null';
import SelectInput from 'components/input/select';
import './categorical_transformer.css';


// MAIN //

class CategoricalTransformer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			generatedName: '',
			firstVar: null,
			firstFreqs: null,
			secondVar: null,
			secondFreqs: null,
			nameMappings: {}
		};
	}

	handleFirstVariableChange = ( variable ) => {
		const nameMappings = {};
		let firstFreqs;
		if ( !this.state.secondVar ) {
			const firstValues = this.props.data[ variable ];
			firstFreqs = countBy( firstValues, identity );
			const keys = variable.categories || objectKeys( firstFreqs );
			for ( let i = 0; i < keys.length; i++ ) {
				nameMappings[ keys[ i ] ] = keys[ i ];
			}
		} else {
			const firstVar = variable;
			const secondVar = this.state.secondVar;
			const firstValues = this.props.data[ firstVar ];
			firstFreqs = countBy( firstValues, identity );
			const firstKeys = firstVar.categories || objectKeys( firstFreqs );
			const secondKeys = secondVar.categories || objectKeys( this.state.secondFreqs );
			for ( let i = 0; i < firstKeys.length; i++ ) {
				for ( let j = 0; j < secondKeys.length; j++ ) {
					const label = firstKeys[ i ] + '-' + secondKeys[ j ];
					nameMappings[ label ] = label;
				}
			}
		}
		this.setState({
			firstVar: variable,
			firstFreqs,
			nameMappings
		});
	}

	handleSecondVariableChange = ( secondVar ) => {
		if ( !secondVar ) {
			// Case: Resetting the second variable...
			const firstVar = this.state.firstVar;
			const keys = firstVar.categories || objectKeys( this.state.firstFreqs );
			const nameMappings = {};
			for ( let i = 0; i < keys.length; i++ ) {
				nameMappings[ keys[ i ] ] = keys[ i ];
			}
			return this.setState({
				secondVar,
				nameMappings
			});
		}
		// Case: Have both a second and first variable...
		const nameMappings = {};
		const firstVar = this.state.firstVar;
		const secondValues = this.props.data[ secondVar ];
		const secondFreqs = countBy( secondValues, identity );
		const firstKeys = firstVar.categories || objectKeys( this.state.firstFreqs );
		const secondKeys = secondVar.categories || objectKeys( secondFreqs );
		for ( let i = 0; i < firstKeys.length; i++ ) {
			for ( let j = 0; j < secondKeys.length; j++ ) {
				const label = firstKeys[ i ] + '-' + secondKeys[ j ];
				nameMappings[ label ] = label;
			}
		}
		this.setState({
			secondVar,
			secondFreqs,
			nameMappings
		});
	}

	renderTable() {
		if ( this.state.firstVar && this.state.secondVar ) {
			return this.renderContigencyTable();
		}
		if ( this.state.firstVar || this.state.secondVar ) {
			return this.renderFrequencyTable();
		}
		return null;
	}

	changeFreqFactory = ( oldLabel ) => {
		return ( event ) => {
			const nameMappings = copy( this.state.nameMappings );
			nameMappings[ oldLabel ] = event.target.value;
			this.setState({
				nameMappings
			});
		};
	}

	changeContigencyFactory = ( rowLabel, colLabel ) => {
		return ( event ) => {
			const nameMappings = copy( this.state.nameMappings );
			nameMappings[ colLabel + '-' + rowLabel ] = event.target.value;
			this.setState({
				nameMappings
			});
		};
	}

	handleGeneratedNameChange = ( event ) => {
		this.setState({
			generatedName: event.target.value
		});
	}

	makeNewVar = () => {
		// Loop over the data and generate new labels:
		const newVar = [];
		const nameMappings = this.state.nameMappings;
		console.log( this.state.nameMappings );
		if ( isNull( this.state.secondVar ) ) {
			const rawData = this.props.data[ this.state.firstVar ];
			console.log( rawData );
			for ( let i = 0; i < rawData.length; i++ ) {
				const val = rawData[ i ];
				const newLabel = nameMappings[ val ];
				newVar.push( newLabel );
			}
		} else {
			const firstValues = this.props.data[ this.state.firstVar ];
			const secondValues = this.props.data[ this.state.secondVar ];
			for ( let i = 0; i < firstValues.length; i++ ) {
				const oldFirst = firstValues[ i ];
				const oldSecond = secondValues[ i ];
				const newLabel = nameMappings[ oldFirst + '-' + oldSecond ];
				newVar.push( newLabel );
			}
		}
		console.log(newVar);
		this.props.onGenerate( this.state.generatedName, newVar );
		this.props.onHide();
	}

	renderFrequencyTable = () => {
		const variable = this.state.firstVar;
		const values = this.props.data[ variable ];
		const varFreqs = countBy( values, identity );
		const keys = variable.categories || objectKeys( varFreqs );
		console.log( 'KEYS:');
		console.log( keys );
		return (
			<Table bordered >
				<tbody>
					<tr>
						<th>Old:</th>
						{keys.map( ( val, idx ) => {
							return <th key={`${variable}-${idx}-old`}>{val}</th>;
						})}
					</tr>
					<tr>
						<th>New:</th>
						{keys.map( ( val, idx ) => {
							return ( <th key={`${variable}-${idx}-new`}>
								<input
									className="transformer-table-input"
									type="text"
									defaultValue={val}
									onChange={this.changeFreqFactory( val )}
								/>
							</th> );
						})}
					</tr>
					<tr style={{ borderTop: '1px solid black' }}>
						<th>Frequencies:</th>
						{keys.map( ( label, idx ) => {
							const freq = this.state.firstFreqs[ label ];
							return <td key={`${variable}-${idx}-freq`}>{freq}</td>;
						})}
					</tr>
				</tbody>
			</Table>
		);
	}

	renderContigencyTable = () => {
		const rowVar = this.state.secondVar;
		const colVar = this.state.firstVar;
		const rowValues = this.props.data[ rowVar ];
		const colValues = this.props.data[ colVar ];
		const rowFreqs = countBy( rowValues, identity );
		const colFreqs = countBy( colValues, identity );
		console.log( this.state.nameMappings );
		const rowKeys = rowVar.categories || objectKeys( rowFreqs );
		const colKeys = colVar.categories || objectKeys( colFreqs );
		return (
			<Table bordered>
				<tr>
					<th></th>
					{colKeys.map( ( col, idx ) => {
						return ( <th key={`${col}-${idx}`}>
							{col}
						</th> );
					})}
				</tr>
				{rowKeys.map( ( row, idx ) => {
					return ( <tr key={`${row}-${idx}`}>
						<th>{row}</th>
						{colKeys.map( ( col, idx ) => {
							return ( <td key={`${row}-${col}-${idx}`}>
								<input
									className="transformer-table-input"
									type="text" defaultValue={`${col}-${row}`}
									onChange={this.changeContigencyFactory( row, col )}
								/>
							</td> );
						})}
					</tr> );
				})}
			</Table>
		);
	}

	render() {
		return (
			<Modal
				dialogClassName='modal-75w'
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Transform Categorical Variables</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col md={3}>
							<SelectInput
								legend="First Variable:"
								defaultValue={this.state.firstVar || ''}
								options={this.props.categorical}
								onChange={this.handleFirstVariableChange}
							/>
						</Col>
						<Col md={3}>
							<SelectInput
								clearable
								legend="Second Variable (optional):"
								defaultValue={this.state.secondVar || ''}
								options={this.props.categorical}
								onChange={this.handleSecondVariableChange}
							/>
						</Col>
					</Row>
					<Row style={{ overflowX: 'auto', width: '100%' }}>
						{this.renderTable()}
					</Row>
					<Row>
						<Col md={2}>
							<label>Generated variable name:</label>
						</Col>
						<Col md={2}>
							<FormControl
								type="text"
								placeholder="Select name..."
								onChange={this.handleGeneratedNameChange}
							/>
						</Col>
						<Col md={2}>
							<Button onClick={this.makeNewVar} disabled={this.state.generatedName.length < 2}>
								Create new variable
							</Button>
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		);
	}
}

// PROPERTIES //

CategoricalTransformer.defaultProps = {

};

CategoricalTransformer.propTypes = {
	categorical: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	onGenerate: PropTypes.func.isRequired,
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};


// EXPORTS //

export default CategoricalTransformer;
