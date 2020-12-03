// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import noop from '@stdlib/utils/noop';
import Input from '@isle-project/components/input/base';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';
import './checkbox.css';


// MAIN //

/**
* A checkbox input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} bind - name of global variable for the checkbox value to be assigned to
* @property {boolean} defaultValue - boolean value indicating the default value of the checkbox
* @property {boolean} value - checkbox value (for controlled component)
* @property {boolean} disabled - indicates whether the input is active or not
* @property {boolean} inline - indicates whether the checkbox is displayed inline
* @property {string} legend - text displayed next to the checkbox
* @property {string} tooltip - text displayed when hovering over checkbox
* @property {string} tooltipPlacement - position of button tooltip
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback function to be invoked when checkbox is clicked. The function is called with the current checkbox value
*/
class CheckboxInput extends Input {
	constructor( props, context ) {
		super( props );

		const session = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue,
			bind: props.bind,
			defaultValue: props.defaultValue
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.defaultValue !== prevState.defaultValue ) {
			newState.value = nextProps.defaultValue;
			newState.defaultValue = nextProps.defaultValue;
		}
		else if ( nextProps.bind !== prevState.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
			newState.bind = nextProps.bind;
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
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

	updateValue = ( newValue ) => {
		this.setState({
			value: newValue
		}, () => {
			if ( this.props.bind ) {
				global.lesson.setState({
					[ this.props.bind ]: newValue
				});
			}
		});
	}

	handleChange = ( event ) => {
		const newValue = event.target.checked;
		this.props.onChange( newValue );
		this.updateValue( newValue );
	}

	handleSpanChange = ( event ) => {
		const newValue = this.props.value !== null ? !this.props.value : !this.state.value;
		this.props.onChange( newValue );
		this.updateValue( newValue );
	}

	render() {
		let { value } = this.state;
		if ( this.props.value !== null ) {
			value = this.props.value;
		}
		const input = <input
			className="checkbox-input"
			type="checkbox"
			checked={value}
			value="checkbox"
			onChange={this.handleChange}
			disabled={this.props.disabled}
			aria-label={this.props.tooltip}
		></input>;
		if ( this.props.inline === true ) {
			return (
				<Tooltip tooltip={this.props.tooltip} placement={this.props.tooltipPlacement} >
					<span style={{ marginLeft: '8px', ...this.props.style }}>
						{input}
						<span
							role="button" tabIndex={0}
							className="checkbox-legend"
							style={{
								color: this.props.disabled ? 'darkgray' : null
							}}
							onClick={this.handleSpanChange} onKeyPress={this.handleSpanChange}
						>{this.props.legend}</span>
					</span>
				</Tooltip>
			);
		}
		const onSpanChange = this.props.disabled ? noop : this.handleSpanChange;
		return (
			<Tooltip tooltip={this.props.tooltip} placement={this.props.tooltipPlacement} >
				<div className="input checkbox-input-div" style={this.props.style}>
					{input}
					<span
						role="button" tabIndex={0}
						className="checkbox-legend"
						style={{
							color: this.props.disabled ? 'darkgray' : null
						}}
						onClick={onSpanChange} onKeyPress={onSpanChange}
					>{this.props.legend}</span>
				</div>
			</Tooltip>
		);
	}
}


// PROPERTIES //

CheckboxInput.defaultProps = {
	bind: '',
	onChange() {},
	defaultValue: false,
	value: null,
	disabled: false,
	inline: false,
	legend: '',
	tooltip: '',
	tooltipPlacement: 'right',
	style: {}
};

CheckboxInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.bool,
	value: PropTypes.bool,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	onChange: PropTypes.func,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	tooltip: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'left', 'top', 'right', 'bottom' ]),
	style: PropTypes.object
};

CheckboxInput.contextType = SessionContext;


// EXPORTS //

export default CheckboxInput;
