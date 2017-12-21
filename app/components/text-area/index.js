// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import isEmptyObject from '@stdlib/assert/is-empty-object';


// MAIN //

class TextArea extends Component {
	/**
	* Create a text area
	*
	* @param {Object} props - component properties (`onChange` callback and `text`)
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: props.defaultValue
		};

		/*
		* Event handler invoked when text area value changes. Updates `text` and invokes
		* `onChange` callback with the new text as its first argument
		*/
		this.handleChange = ( event ) => {
			const value = event.target.value;
			this.setState({ value });
			this.props.onChange( value );
		};
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	/*
	* React component render method.
	*/
	render() {
		return (
			<FormGroup controlId="formControlsTextarea">
				<ControlLabel>{this.props.legend}</ControlLabel>
				<FormControl
					componentClass="textarea"
					placeholder={this.props.placeholder}
					onChange={this.handleChange}
					style={{
						resize: this.props.resizable ? 'both' : 'none',
						...this.props.style
					}}
					rows={this.props.rows}
					value={this.state.value}
					disabled={this.props.disabled}
				/>
			</FormGroup>
		);
	}
}


// DEFAULT PROPERTIES //

TextArea.defaultProps = {
	defaultValue: '',
	disabled: false,
	legend: '',
	onChange() {},
	placeholder: 'Enter text',
	resizable: false,
	rows: 5,
	style: {}
};


// PROPERTY TYPES //

TextArea.propTypes = {
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	legend: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	resizable: PropTypes.bool,
	rows: PropTypes.number,
	style: PropTypes.object
};


// EXPORTS //

export default TextArea;
