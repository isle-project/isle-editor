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
			value: !props.bind ?
				props.defaultValue :
				session.config.state[ props.bind ]
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
						ref={ ( input ) => {
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
		} else {
			return (
				<div className="text-container-div" >
					<span style={{ marginLeft: '8px' }}>
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
						ref={ ( input ) => {
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
}


// DEFAULT PROPERTIES //

TextInput.defaultProps = {
	defaultValue: '',
	width: 80,
	onChange(){},
	inline: false,
	placeholder: 'Enter text'
};


// PROPERTY TYPES //

TextInput.propTypes = {
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	width: PropTypes.number,
	onChange: PropTypes.func,
	placeholder: PropTypes.string
};


// CONTEXT TYPES //

TextInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default TextInput;
