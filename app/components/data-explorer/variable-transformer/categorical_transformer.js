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
import isDigitString from '@stdlib/assert/is-digit-string';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Tooltip from 'components/tooltip';
import { DATA_EXPLORER_CAT_TRANSFORMER } from 'constants/actions.js';
import './categorical_transformer.css';
import recodeCategorical from './recode_categorical';


// FUNCTIONS //

function checkNumericLabels( nameMappings ) {
	const keys = objectKeys( nameMappings );
	let allNumeric = true;
	for ( let i = 0; i < keys.length; i++ ) {
		if ( !isDigitString( nameMappings[ keys[ i ] ] ) ) {
			allNumeric = false;
		}
	}
	return allNumeric;
}


// MAIN //

class CategoricalTransformer extends Component {
	constructor( props ) {
		super( props );

		const firstVar = props.categorical[ 0 ];
		const firstValues = props.data[ firstVar ];
		const firstFreqs = countBy( firstValues, identity );
		const keys = firstVar.categories || objectKeys( firstFreqs );
		const nameMappings = {};
		for ( let i = 0; i < keys.length; i++ ) {
			nameMappings[ keys[ i ] ] = keys[ i ];
		}
		this.state = {
			generatedName: '',
			firstVar,
			firstFreqs,
			nameMappings,
			secondVar: null,
			secondFreqs: null,
			castNumeric: false,
			onlyNumbers: false
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
		const onlyNumbers = checkNumericLabels( nameMappings );
		this.setState({
			firstVar: variable,
			firstFreqs,
			nameMappings,
			onlyNumbers
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
		const onlyNumbers = checkNumericLabels( nameMappings );
		this.setState({
			secondVar,
			secondFreqs,
			nameMappings,
			onlyNumbers
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
			const onlyNumbers = checkNumericLabels( nameMappings );
			this.setState({
				nameMappings,
				onlyNumbers
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
		const { firstVar, secondVar, nameMappings, castNumeric } = this.state;
		const newVar = recodeCategorical( firstVar, secondVar, nameMappings, this.props.data, castNumeric );
		this.props.onGenerate( this.state.generatedName, newVar );
		this.props.logAction( DATA_EXPLORER_CAT_TRANSFORMER, {
			name: this.state.generatedName,
			firstVar: firstVar,
			secondVar: secondVar,
			nameMappings: nameMappings,
			castNumeric: castNumeric
		});
		this.props.onHide();
	}

	renderFrequencyTable = () => {
		const variable = this.state.firstVar;
		const values = this.props.data[ variable ];
		const varFreqs = countBy( values, identity );
		const keys = variable.categories || objectKeys( varFreqs );
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
		console.log( this.state );
		return (
			<Modal
				dialogClassName='modal-75w input'
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
						<Tooltip tooltip="If the new values for all categories are numeric, you may tick this box to create a quantitative variable instead of a categorical one">
							<CheckboxInput
								legend="Convert to numbers (all new labels need to be digits)"
								defaultValue={false}
								disabled={!this.state.onlyNumbers}
								onChange={() => {
									this.setState({
										castNumeric: !this.state.castNumeric
									});
								}}
							/>
						</Tooltip>
					</Row>
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
								onChange={this.handleGeneratedNameChange}
							/>
						</Col>
						<Col>
							<Button onClick={this.makeNewVar} disabled={this.state.generatedName.length < 2}>
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

CategoricalTransformer.defaultProps = {
	logAction() {}
};

CategoricalTransformer.propTypes = {
	categorical: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	onGenerate: PropTypes.func.isRequired,
	logAction: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};


// EXPORTS //

export default CategoricalTransformer;
