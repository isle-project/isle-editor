// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import FocusTrap from 'focus-trap-react';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Table from '@isle-project/components/table';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import copy from '@stdlib/utils/copy';
import replace from '@stdlib/string/replace';
import isDigitString from '@stdlib/assert/is-digit-string';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Tooltip from '@isle-project/components/tooltip';
import { DATA_EXPLORER_CAT_TRANSFORMER } from '@isle-project/constants/actions.js';
import recodeCategorical from './recode_categorical';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import validateName from './validate_name.js';
import './categorical_transformer.css';


// VARIABLES //

const debug = logger( 'isle:data-explorer:variable-transformer' );
const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};


// FUNCTIONS //

/**
 * Escapes dots in a string.
 *
 * @private
 * @param {string} str - string to escape
 * @returns {string} escaped string
 */
function escapeDots( str ) {
	if ( !str ) {
		return str;
	}
	return replace( str, '.', '[dot]' );
}

/**
 * Checks whether all values of the supplied object are digit strings.
 *
 * @private
 * @param {Object} nameMappings - object of name to digit mappings to check
 * @returns {boolean} boolean indicating whether all values are digit strings
 */
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
		const keys = extractUsedCategories( firstFreqs, firstVar );
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
			const keys = extractUsedCategories( firstFreqs, variable );
			for ( let i = 0; i < keys.length; i++ ) {
				nameMappings[ escapeDots( keys[ i ] ) ] = keys[ i ];
			}
		} else {
			const firstVar = variable;
			const secondVar = this.state.secondVar;
			const firstValues = this.props.data[ firstVar ];
			firstFreqs = countBy( firstValues, identity );
			const firstKeys = extractUsedCategories( firstFreqs, firstVar );
			const secondKeys = extractUsedCategories( this.state.secondFreqs, secondVar );
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
	};

	handleSecondVariableChange = ( secondVar ) => {
		if ( !secondVar ) {
			// Case: Resetting the second variable...
			const firstVar = this.state.firstVar;
			const keys = extractUsedCategories( this.state.firstFreqs, firstVar );
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
		const firstKeys = extractUsedCategories( this.state.firstFreqs, firstVar );
		const secondKeys = extractUsedCategories( secondFreqs, secondVar );
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
	};

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 && validateName( this.state.generatedName ) ) {
			this.makeNewVar();
		}
	};

	renderTable() {
		if ( this.state.firstVar && this.state.secondVar ) {
			return this.renderContingencyTable();
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
	};

	changeContingencyFactory = ( rowLabel, colLabel ) => {
		return ( event ) => {
			const nameMappings = copy( this.state.nameMappings );
			nameMappings[ escapeDots( colLabel ) + '-' + escapeDots( rowLabel ) ] = event.target.value;
			this.setState({
				nameMappings
			});
		};
	};

	handleGeneratedNameChange = ( event ) => {
		this.setState({
			generatedName: event.target.value
		});
	};

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
	};

	renderFrequencyTable = () => {
		const variable = this.state.firstVar;
		const values = this.props.data[ variable ];
		const varFreqs = countBy( values, identity );
		const keys = extractUsedCategories( varFreqs, variable );
		return (
			<Table bordered style={{ margin: 8 }} clickable={false} >
				<thead>
					<tr>
						<th>{this.props.t('old')}:</th>
						{keys.map( ( val, idx ) => {
							return <th key={`${variable}-${idx}-old`}>{val}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>{this.props.t('new')}:</th>
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
						<th>{this.props.t('frequencies')}:</th>
						{keys.map( ( label, idx ) => {
							const freq = this.state.firstFreqs[ label ];
							return <td key={`${variable}-${idx}-freq`}>{freq}</td>;
						})}
					</tr>
				</tbody>
			</Table>
		);
	};

	renderContingencyTable = () => {
		const rowVar = this.state.secondVar;
		const colVar = this.state.firstVar;
		const rowValues = this.props.data[ rowVar ];
		const colValues = this.props.data[ colVar ];
		const rowFreqs = countBy( rowValues, identity );
		const colFreqs = countBy( colValues, identity );
		const rowKeys = extractUsedCategories( rowFreqs, rowVar );
		const colKeys = extractUsedCategories( colFreqs, colVar );
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
									onChange={this.changeContingencyFactory( row, col )}
								/>
							</td> );
						})}
					</tr> );
				})}
			</Table>
		);
	};

	render() {
		const { t } = this.props;
		return (
			<Draggable cancel=".card-body" onDragStart={( event ) => {
				event.stopPropagation();
			}} style={{ zIndex: 1006 }} >
				<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
					<Panel
						onHide={this.props.onHide}
						show={this.props.show}
						header={t('categorical-transformer-header')}
						footer={<Button onClick={this.makeNewVar} disabled={!validateName( this.state.generatedName )}>
							{t('create-new-variable')}
						</Button>}
						bodyStyle={{
							maxHeight: 'calc(100vh - 200px)',
							overflowY: 'auto',
							position: 'relative'
						}}
						role="button" tabIndex={0}
					>
						<Row>
							<Col md={4}>
								<SelectInput
									legend={t('first-variable')}
									defaultValue={this.state.firstVar || ''}
									options={this.props.categorical}
									onChange={this.handleFirstVariableChange}
								/>
							</Col>
							<Col md={4}>
								<SelectInput
									clearable
									legend={t('optional-second-variable')}
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
							<Tooltip tooltip={t('treat-labels-as-numbers-tooltip')}>
								<CheckboxInput
									legend={t('treat-labels-as-numbers')}
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
								<FormLabel>{t('name-new-variable')}:</FormLabel>
								<FormControl
									type="text"
									placeholder={t('select-name')}
									onChange={this.handleGeneratedNameChange}
									onKeyPress={this.handleKeyPress}
								/>
								<FormText>
									{t('new-variable-appended')}
								</FormText>
							</FormGroup>
						</Row>
					</Panel>
				</FocusTrap>
			</Draggable>
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
