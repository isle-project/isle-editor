// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input/base';
import './text.css';


// MAIN //

class TextInput extends Input {
	constructor( props, context ) {
		super( props );

		const { session } = context;
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
				<span>
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
			<div className="text-container-div" >
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


// DEFAULT PROPERTIES //

TextInput.propDescriptions = {
	onChange: 'A function to be called when a text value is changed',
	defaultValue: 'A value indicating the default value of the input at start',
	disabled: 'A boolean indicating whether the input is active or not',
	width: 'A number indicating the width of the input in pixels',
	inline: 'Indicates whether the input is displayed inline',
	legend: 'A string indicating the text displayed next to the number input',
	onBlur: 'A function to be called when using a blur method',
	numbersOnly: 'A boolean value indicating whether only numbers are accepted',
	value: 'A property indicating a value that can overwrite others',
	placeholder: 'A string indicating the value to be displayed before an initial choice is made'
}

TextInput.defaultProps = {
	defaultValue: '',
	legend: 'Text Input',
	width: 80,
	onChange(){},
	inline: false,
	placeholder: 'Enter text'
};


// PROPERTY TYPES //

TextInput.propTypes = {
	defaultValue: PropTypes.string,
	legend: PropTypes.string,
	inline: PropTypes.bool,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	width: PropTypes.number
};


// CONTEXT TYPES //

TextInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default TextInput;
