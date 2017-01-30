// MODULES //

import React, { Component, PropTypes } from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


// TEXT AREA //

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
			text: props.defaultValue
		};

		/*
		* Event handler invoked when text area value changes. Updates `text` and invokes
		* `onChange` callback with the new text as its first argument
		*/
		this.handleChange = ( event ) => {
			const text = event.target.value;
			this.setState({ text });
			this.props.onChange( text );
		};
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
					value={this.state.text}
				/>
			</FormGroup>
		);
	}
}


// DEFAULT PROPERTIES //

TextArea.defaultProps = {
	onChange() {},
	legend: '',
	placeholder: 'Enter text',
	defaultValue: null,
	resizable: false,
	rows: 5
};


// PROPERTY TYPES //

TextArea.propTypes = {
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	legend: PropTypes.string,
	placeholder: PropTypes.string,
	resizable: PropTypes.bool,
	rows: PropTypes.number
};


// EXPORTS //

export default TextArea;
