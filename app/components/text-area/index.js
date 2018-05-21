// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
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
			value: props.defaultValue,
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.defaultValue !== prevState.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	/*
	* Event handler invoked when text area value changes. Updates `text` and invokes
	* `onChange` callback with the new text as its first argument
	*/
	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({ value });
		this.props.onChange( value );
	}

	renderLegend() {
		if (this.props.legend !== '') {
			return <ControlLabel>{this.props.legend}</ControlLabel>;
		}
		return null;
	}

	/*
	* React component render method.
	*/
	render() {
		return (
			<FormGroup controlId="formControlsTextarea">
				{this.renderLegend()}
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
