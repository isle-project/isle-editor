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
import './select.css';


// VARIABLES //

const debug = logger( 'isle-editor' );
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


// MAIN //

/**
* A select input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} options - array of indicating the choices available the user
* @property {string} bind - name of global variable for the number to be assigned to
* @property {string} onChange - callback function to be invoked when a choice is made
* @property {string} clearable - boolean value indicating whether one may clear choice(s) made
* @property {string} defaultValue - default value of the input at startup
* @property {string} disabled - controls whether the input is active or not
* @property {string} inline - indicates whether the input is displayed inline
* @property {string} legend - text displayed next to the input
* @property {string} multi - controls whether one may select multiple answers
* @property {string} placeholder - value to be displayed before an initial choice is made
*/
class SelectInput extends Input {
	/**
	* Create a select input field.
	*
	* @param {Object} props - component properties (`onChange` callback and `defaultValue`)
	*/
	constructor( props ) {
		super( props );

		this.options = this.props.options.map( e => {
			return { 'label': e, 'value': e };
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
				return { 'label': e, 'value': e };
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
		let style;
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
			<Form style={{ ...style }} >
				<FormGroup controlId="form-controls-select">
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
						isMulti={this.props.multi}
						styles={customStyles}
						isClearable={clearable}
						isDisabled={this.props.disabled}
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
	options: [],
	multi: false,
	placeholder: 'Select...'
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
	legend: PropTypes.string,
	multi: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.array,
	placeholder: PropTypes.string
};


// EXPORTS //

export default SelectInput;
