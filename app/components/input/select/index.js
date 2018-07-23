// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import logger from 'debug';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import Input from 'components/input/base';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './select.css';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class SelectInput extends Input {
	/**
	* Create a select input field.
	*
	* @param {Object} props - component properties (`onChange` callback and `defaultValue`)
	*/
	constructor( props ) {
		super( props );

		this.options = this.props.options.map( e => {
			return { 'label': e, 'value': e, 'className': 'select-field-options' };
		});
		const { defaultValue } = props;
		let value = null;
		if ( defaultValue ) {
			value = this.transformValue( defaultValue );
		}
		this.state = {
			value
		};
	}

	handleChange = ( newValue ) => {
		debug( 'Received a new value: ' + JSON.stringify( newValue ) );
		this.setState({
			value: newValue
		}, () => {
			let val = null;
			if ( isObject( newValue ) || isArray( newValue ) ) {
				val = this.props.multi ?
					newValue.map( x => x.value ) :
					newValue.value;
			}
			this.props.onChange( val );
			if ( this.props.bind ) {
				global.lesson.setState({
					[ this.props.bind ]: val
				});
			}
		});
	}

	transformValue = ( value ) => {
		let out;
		if ( isArray( value ) ) {
			out = value.map( val => {
				return { 'label': val, 'value': val };
			});
		} else {
			out = { 'label': value, 'value': value };
		}
		return out;
	}

	componentDidUpdate() {
		if ( this.props.bind ) {
			let globalVal = global.lesson.state[ this.props.bind ];
			if ( globalVal !== this.state.value ) {
				this.setState({
					value: globalVal
				});
			}
		}
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = this.transformValue( nextProps.defaultValue );
		}
		else if ( nextProps.bind !== this.props.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( nextProps.options !== this.props.options ) {
			this.options = nextProps.options.map( e => {
				return { 'label': e, 'value': e, 'className': 'select-field-options' };
			});
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	/*
	* React component render method.
	*/
	render() {
		let style = {};
		if ( this.props.inline ) {
			style = {
				width: 'auto',
				display: 'inline',
				fontWeight: 600
			};
		}
		let clearable = this.props.multi ? true : false;
		if ( this.props.clearable ) {
			clearable = this.props.clearable;
		}
		return (
			<Form style={{ ...this.props.style }} >
				<FormGroup controlId="formControlsSelect">
					{ this.props.legend ?
						<ControlLabel>{this.props.legend}</ControlLabel> :
						null
					}
					<Select
						name="form-field-name"
						className="select-field"
						value={this.state.value}
						options={this.options}
						onChange={this.handleChange}
						placeholder={this.props.placeholder}
						multi={this.props.multi}
						style={style}
						clearable={clearable}
						disabled={this.props.disabled}
					/>
				</FormGroup>
			</Form>
		);
	}
}


// DEFAULT PROPERTIES //

SelectInput.propDescriptions = {
	bind: 'A string indicating the variable for the number to be assigned',
	onChange: 'A function to be called when a number is inputted',
	clearable: 'A boolean value indicating whether one may clear choice(s) made',
	defaultValue: 'A value indicating the default value of the input at start',
	disabled: 'A boolean indicating whether the input is active or not',
	inline: 'Indicates whether the input is displayed inline',
	legend: 'A string indicating the text displayed next to the input',
	options: 'An array of indicating the choices available the user',
	multi: 'A boolean indicating whether one may select multiple answers',
	placeholder: 'A string indicating the value to be displayed before an initial choice is made'
}

SelectInput.defaultProps = {
	bind: '',
	onChange() {},
	defaultValue: null,
	disabled: false,
	inline: false,
	legend: '',
	options: [],
	multi: false,
	placeholder: 'Select...'
};


// PROPERTY TYPES //

SelectInput.propTypes = {
	bind: PropTypes.string,
	clearable: PropTypes.bool,
	defaultValue: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array
	]),
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.string,
	multi: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.array,
	placeholder: PropTypes.string
};


// EXPORTS //

export default SelectInput;
