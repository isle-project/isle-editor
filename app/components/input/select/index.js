// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import logger from 'debug';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import Input from 'components/input/base';
import './select.css';


// VARIABLES //

const debug = logger( 'isle:select-input' );
const customStyles = {
	control: ( base, state ) => {
		if ( state.isDisabled ) {
			return {
				...base,
				background: 'none',
				color: '#aaa',
				opacity: 0.5
			};
		}
		return {
			...base,
			background: 'rgba(186, 204, 234, 0.3)',
			boxShadow: 'none',
			cursor: 'pointer'
		};
	},
	option: ( base, state ) => {
		let backgroundColor = '#fff';
		let color = '#666666';
		if ( state.isFocused ) {
			backgroundColor = 'rgba(204,88,0, 0.16)';
			color = '#333';
		}
		else if ( state.isSelected ) {
			backgroundColor = '#f5faff';
			color = '#333';
		}
		return {
			...base,
			boxSizing: 'border-box',
			backgroundColor: backgroundColor,
			color: color,
			cursor: 'pointer',
			display: 'block',
			padding: '8px 10px'
		};
	}
};


// FUNCTIONS //

const transformValue = ( value ) => {
	let out;
	if ( isArray( value ) ) {
		out = value.map( val => {
			return { 'label': val, 'value': val };
		});
	} else {
		out = { 'label': value, 'value': value };
	}
	return out;
};


// MAIN //

/**
* A select input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {Array} options - array of indicating the choices available the user
* @property {string} bind - name of global variable for the number to be assigned to
* @property {Function} onChange - callback function to be invoked when a choice is made
* @property {boolean} clearable - boolean value indicating whether one may clear choice(s) made
* @property {string} defaultValue - default value of the input at startup
* @property {boolean} disabled - controls whether the input is active or not
* @property {boolean} inline - indicates whether the input is displayed inline
* @property {string} legend - text displayed next to the input
* @property {boolean} multi - controls whether one may select multiple answers
* @property {string} menuPlacement - placement of the menu in relation to the control (either `auto`, `top`, or `bottom`)
* @property {string} placeholder - value to be displayed before an initial choice is made
* @property {Object} style - CSS inline styles
*/
class SelectInput extends Input {
	/**
	* Create a select input field.
	*
	* @param {Object} props - component properties (`onChange` callback and `defaultValue`)
	*/
	constructor( props ) {
		super( props );

		const { defaultValue } = props;
		let value = null;
		if ( defaultValue ) {
			value = transformValue( defaultValue );
		}
		this.state = {
			value,
			options: props.options.map( e => {
				return { 'label': e, 'value': e };
			}),
			prevProps: props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		const { prevProps } = prevState;
		if ( nextProps.defaultValue !== prevProps.defaultValue ) {
			debug( 'Default value has changed...' );
			newState.value = transformValue( nextProps.defaultValue );
		}
		else if ( nextProps.bind !== prevProps.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( nextProps.options !== prevProps.options ) {
			debug( 'Options have changed...' );
			newState.options = nextProps.options.map( e => {
				return { 'label': e, 'value': e };
			});
		}
		if ( !isEmptyObject( newState ) ) {
			newState.prevProps = nextProps;
			return newState;
		}
		return null;
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

	/*
	* React component render method.
	*/
	render() {
		debug( 'Render select component...' );
		let style;
		let value;
		if ( this.props.value !== void 0 ) {
			value = ( this.props.value || [] ).map( e => {
				return { 'label': e, 'value': e };
			});
		}
		else {
			value = this.state.value;
		}
		if ( this.props.inline ) {
			style = {
				width: '180px',
				display: 'inline-block',
				fontWeight: 600,
				...this.props.style
			};
		} else {
			style = {
				fontWeight: 600,
				...this.props.style
			};
		}
		let clearable = this.props.multi ? true : false;
		if ( this.props.clearable ) {
			clearable = this.props.clearable;
		}
		return (
			<Form className="input" style={{ ...style }} >
				<FormGroup controlId="form-controls-select">
					{ this.props.legend ?
						<label>{this.props.legend}</label> :
						null
					}
					<Select
						name="form-field-name"
						className="select-field"
						{...this.props}
						value={value}
						options={this.state.options}
						onChange={this.handleChange}
						placeholder={this.props.placeholder}
						isMulti={this.props.multi}
						styles={customStyles}
						isClearable={clearable}
						isDisabled={this.props.disabled}
						menuPlacement={this.props.menuPlacement}
					/>
				</FormGroup>
			</Form>
		);
	}
}


// PROPERTIES //

SelectInput.defaultProps = {
	bind: '',
	onChange() {},
	defaultValue: null,
	disabled: false,
	inline: false,
	legend: '',
	menuPlacement: 'auto',
	options: [],
	multi: false,
	placeholder: 'Select...',
	style: {}
};

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
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	menuPlacement: PropTypes.oneOf([
		'auto',
		'top',
		'bottom'
	]),
	multi: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default SelectInput;
