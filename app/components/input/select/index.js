// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, Form, FormGroup } from 'react-bootstrap';
import isArray from '@stdlib/assert/is-array';
import Input from 'components/input/base';
const debug = require( 'debug' )( 'isle-editor' );
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';


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
			return { 'label': e, 'value': e };
		});
		const { defaultValue } = props;
		let value = null;
		if ( defaultValue ) {
			if ( isArray( defaultValue ) ) {
				value = defaultValue.map( val => {
					return { 'label': val, 'value': val };
				});
			} else {
				value = { 'label': defaultValue, 'value': defaultValue };
			}
		}
		this.state = {
			value
		};

		this.handleChange = ( newValue ) => {
			debug( 'Received a new value: ' + JSON.stringify( newValue ) );
			this.setState({
				value: newValue
			}, () => {
				const val = this.props.multi ?
					newValue.map( x => x.value ) :
					newValue.value;
				this.props.onChange( val );
				if ( this.context.autoUpdate ) {
					this.context.triggerDashboardClick();
				}
			});
		};
	}

	/*
	* React component render method.
	*/
	render() {
		let style = {};
		if ( this.props.inline ) {
			style = {
				width: 'auto',
				display: 'inline'
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
						value={this.state.value}
						options={this.options}
						onChange={this.handleChange}
						placeholder={this.props.placeholder}
						multi={this.props.multi}
						style={style}
						clearable={clearable}
					/>
				</FormGroup>
			</Form>
		);
	}
}


// DEFAULT PROPERTIES //

SelectInput.defaultProps = {
	bind: '',
	onChange() {},
	defaultValue: null,
	inline: false,
	legend: '',
	options: [],
	multi: false,
	placeholder: 'Select...'
};


// PROPERTY TYPES //

SelectInput.propTypes = {
	bind: PropTypes.string,
	onChange: PropTypes.func,
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	inline: PropTypes.bool,
	legend: PropTypes.string,
	options: PropTypes.array,
	multi: PropTypes.bool,
	placeholder: PropTypes.string,
	clearable: PropTypes.bool
};


// CONTEXT TYPES //

SelectInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};


// EXPORTS //

export default SelectInput;
