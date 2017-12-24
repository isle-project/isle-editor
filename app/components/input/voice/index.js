// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input/base';
import Microphone from '-!svg-react-loader!./../../../img/microphone.svg';
import './voice.css';

// MAIN //

class VoiceInput extends Input {
	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue
		};
	}

	handleChange = ( event ) => {
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
	}

	handleKeyDown = ( event ) => {
		switch ( event.keyCode ) {
		case 13:
			this.props.onSubmit( this.state.value );
			break;
		default:
			break;
		}
	}

	render() {
		return (
			<div className="voice-input" style={{ width: this.props.width }} >
				<input
					className="voice-input-text"
					type="text"
					onKeyDown={this.handleKeyDown}
					onChange={this.handleChange}
					placeholder={this.props.placeholder}
					value={this.state.value}
					ref={( input ) => {
						this.textInput = input;
					}}
				/>
				<Microphone className="voice-microphone" />
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

VoiceInput.defaultProps = {
	defaultValue: '',
	width: 500,
	onChange() {},
	onSubmit() {},
	inline: false,
	placeholder: 'Enter text'
};


// PROPERTY TYPES //

VoiceInput.propTypes = {
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	placeholder: PropTypes.string,
	width: PropTypes.number
};


// CONTEXT TYPES //

VoiceInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default VoiceInput;
