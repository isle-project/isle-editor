// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input/base';
import SessionContext from 'session/context.js';
import './text.css';


// MAIN //

/**
* A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {Function} onChange - A function to be called when a text value is changed
* @property {string} defaultValue - A value indicating the default value of the input at start
* @property {boolean} disabled - A boolean indicating whether the input is active or not
* @property {number} width - A number indicating the width of the input in pixels
* @property {boolean} inline - Indicates whether the input is displayed inline
* @property {string} legend - A string indicating the text displayed next to the number input
* @property {string} value - text value (for controlled component)
* @property {string} bind - name of global variable for the number to be assigned to
* @property {string} placeholder - A string indicating the value to be displayed before an initial choice is made
*/
class TextInput extends Input {
	constructor( props, context ) {
		super( props );

		const session = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue
		};

		this.focus = this.focus.bind( this );

		this.handleChange = ( event ) => {
			const value = event.target.value;
			this.setState({
				value
			}, () => {
				this.props.onChange( value );
				if ( this.props.bind ) {
					global.lesson.setState({
						[ this.props.bind ]: value
					});
				}
			});
		};
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== this.props.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
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

	focus() {
		this.textInput.focus();
	}

	render() {
		if ( this.props.inline ) {
			return (
				<span className="input">
					{ this.props.legend ? <label>{this.props.legend}:</label> : <span /> }
					<input
						className="text-inline-input"
						type="text"
						name="input"
						placeholder={this.props.placeholder}
						value={this.state.value}
						ref={( input ) => {
							this.textInput = input;
						}}
						style={{
							width: this.props.width
						}}
						onChange={this.handleChange}
					/>
					{ this.props.description ?
						<span> ({this.props.description}) </span> :
						<span />
					}
				</span>
			);
		}
		return (
			<div className="input text-container-div" >
				<span>
					<label>{this.props.legend}:</label>
					{ this.props.description ?
						<span> {this.props.description}</span> :
						<span />
					}
				</span>
				<input
					className="text-input"
					type="text"
					name="input"
					placeholder={this.props.placeholder}
					value={this.state.value}
					ref={( input ) => {
						this.textInput = input;
					}}
					style={{
						width: this.props.width
					}}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}


// PROPERTIES //

TextInput.defaultProps = {
	bind: null,
	defaultValue: '',
	legend: '',
	width: 80,
	onChange(){},
	inline: false,
	placeholder: 'Enter text'
};

TextInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.string,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	inline: PropTypes.bool,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	width: PropTypes.number
};

TextInput.contextType = SessionContext;


// EXPORTS //

export default TextInput;
