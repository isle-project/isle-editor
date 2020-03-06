// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Table from 'components/table';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import copy from '@stdlib/utils/copy';
import replace from '@stdlib/string/replace';
import isDigitString from '@stdlib/assert/is-digit-string';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Tooltip from 'components/tooltip';
import { DATA_EXPLORER_CAT_TRANSFORMER } from 'constants/actions.js';
import DraggableModalDialog from './draggable_modal_dialog.js';
import recodeCategorical from './recode_categorical';
import './categorical_transformer.css';


// VARIABLES //

const debug = logger( 'isle:data-explorer:variable-transformer' );


// FUNCTIONS //

function escapeDots( str ) {
	if ( !str ) {
		return str;
	}
	return replace( str, '.', '[dot]' );
}

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
			nameMappings[ escapeDots( keys[ i ] ) ] = keys[ i ];
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
				nameMappings[ escapeDots( keys[ i ] ) ] = keys[ i ];
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
					nameMappings[ escapeDots( label ) ] = label;
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
				nameMappings[ escapeDots( keys[ i ] ) ] = keys[ i ];
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
				nameMappings[ escapeDots( label ) ] = label;
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
			nameMappings[ escapeDots( oldLabel ) ] = event.target.value;
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
			nameMappings[ escapeDots( colLabel ) + '-' + escapeDots( rowLabel ) ] = event.target.value;
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
		debug( 'Generating new categorical variable...' );
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
			<Table bordered style={{ margin: 8 }} >
				<thead>
					<tr>
						<th>Old:</th>
						{keys.map( ( val, idx ) => {
							return <th key={`${variable}-${idx}-old`}>{val}</th>;
						})}
					</tr>
				</thead>
				<tbody>
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
			<Table bordered style={{ margin: 8 }}>
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
				dialogAs={DraggableModalDialog}
				dialogClassName='modal-60w input'
				onHide={this.props.onHide}
				show={this.props.show}
				backdrop={false}
				bsPrefix="draggable-modal"
				tabIndex={0} role="button"
			>
				<Modal.Header closeButton className="draggable-modal-header" >
					<Modal.Title>Create new variable by renaming or combining categories</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col md={4}>
							<SelectInput
								legend="First Variable:"
								defaultValue={this.state.firstVar || ''}
								options={this.props.categorical}
								onChange={this.handleFirstVariableChange}
							/>
						</Col>
						<Col md={4}>
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
								legend="Treat category labels as numbers (all new labels need to be digits)"
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
					<Row>
						<FormGroup style={{ margin: 8 }}>
							<FormLabel>Name of new variable:</FormLabel>
							<FormControl
								type="text"
								placeholder="Select name..."
								onChange={this.handleGeneratedNameChange}
							/>
							<FormText>
								The new variable will be appended as a new column to the data table.
							</FormText>
						</FormGroup>
					</Row>
				</Modal.Body>
				<Modal.Footer style={{ justifyContent: 'center' }}>
					<Button onClick={this.makeNewVar} disabled={this.state.generatedName.length < 2}>
						Create new variable
					</Button>
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
