// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input/base';


// MAIN //

class CheckboxInput extends Input {

	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue,
		};

		/**
		* Event handler invoked once the checkbox is clicked by the user. Changes the
		* `isChecked` property and then invokes the user-supplied `onChange` callback function.
		*/
		this.handleChange = ( event ) => {
			this.setState({
				value: event.target.checked
			}, () => {
				this.props.onChange( this.state.value );
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
		}
		else if ( nextProps.bind !== this.props.bind ) {
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

	render() {
		const input = <input
			type="checkbox"
			checked={this.state.value}
			value="checkbox"
			onChange={this.handleChange}
			disabled={this.props.disabled}
			style={{
				verticalAlign: 'bottom',
				width: '24px',
				height: '24px'
			}}
		></input>;
		if ( this.props.inline === true ) {
			return (
				<span style={{ marginLeft: '8px', ...this.props.style }}>
					{input}
					<span
						style={{
							marginLeft: '12px'
						}}
					>{this.props.legend}</span>
				</span>
			);
		} else {
			return (
				<div style={{
					marginTop: '8px',
					marginLeft: '8px',
					marginBottom: '8px',
					...this.props.style
				}}>
					{input}
					<span
						style={{
							marginLeft: '12px'
						}}
					>{this.props.legend}</span>
				</div>
			);
		}
	}
}


// DEFAULT PROPERTIES //

CheckboxInput.defaultProps = {
	bind: '',
	onChange() {},
	defaultValue: false,
	disabled: false,
	inline: false
};


// PROPERTY TYPES //

CheckboxInput.propTypes = {
	bind: PropTypes.string,
	onChange: PropTypes.func,
	defaultValue: PropTypes.bool,
	disabled: PropTypes.bool,
	inline: PropTypes.bool
};


// CONTEXT TYPES //

CheckboxInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default CheckboxInput;
