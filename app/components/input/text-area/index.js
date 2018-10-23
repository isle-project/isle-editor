// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import isEmptyObject from '@stdlib/assert/is-empty-object';


// MAIN //

/**
* A text area component. Used as a stand-alone component, changes should be handled via the `onChange` attribute.
*
* @property {string} defaultValue - default value of the text area
* @property {string} value - text value (for controlled component)
* @property {boolean} disabled - controls whether the text area shall be disabled
* @property {string} legend - legend text
* @property {string} placeholder - placeholder text
* @property {boolean} resizable - controls whether the text area shall be resizable
* @property {number} rows - number of rows
* @property {Object} style - CSS inline styles
* @property {Function} onBlur - callback function invoked when the text area loses focus
* @property {Function} onChange - callback function invoked with the new text when the area text changes
*/
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
			value: props.value || props.defaultValue,
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.defaultValue !== prevState.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
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
			return <label>{this.props.legend}</label>;
		}
		return null;
	}

	/*
	* React component render method.
	*/
	render() {
		let { value } = this.state;
		if ( this.props.value ) {
			value = this.props.value;
		}
		return (
			<FormGroup controlId="formControlsTextarea">
				{this.renderLegend()}
				<FormControl
					as="textarea"
					placeholder={this.props.placeholder}
					ref={div => { this.textarea = div; }}
					onBlur={this.props.onBlur}
					onChange={this.handleChange}
					style={{
						resize: this.props.resizable ? 'both' : 'none',
						...this.props.style
					}}
					rows={this.props.rows}
					value={value}
					disabled={this.props.disabled}
				/>
			</FormGroup>
		);
	}
}


// PROPERTIES //

TextArea.defaultProps = {
	defaultValue: '',
	value: null,
	disabled: false,
	legend: '',
	onBlur() {},
	onChange() {},
	placeholder: 'Enter text',
	resizable: false,
	rows: 5,
	style: {}
};

TextArea.propTypes = {
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	legend: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	resizable: PropTypes.bool,
	rows: PropTypes.number,
	style: PropTypes.object
};


// EXPORTS //

export default TextArea;
