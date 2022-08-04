// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';
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
const CheckboxInput = ( props ) => {
	const { bind, defaultValue, disabled, onChange } = props;
	const { id } = useActionLogger( 'CHECKBOX_INPUT', props );
	const session = useContext( SessionContext );
	const [ value, setValue ] = useState(
		bind && session.state ? session.state[ bind ]: defaultValue
	);
	useEffect( () => {
		setValue( defaultValue );
	}, [ defaultValue ] );
	useEffect( () => {
		if ( bind ) {
			setValue( global.lesson.state[ bind ] );
		}
	}, [ bind ] );
	useEffect( () => {
		if ( bind ) {
			let globalValue = global.lesson.state[ bind ];
			if ( globalValue !== value ) {
				setValue( globalValue );
			}
		}
	}, [ bind, value ]);
	const updateValue = useCallback( ( newValue ) => {
		setValue( newValue );
		if ( bind ) {
			global.lesson.setState({
				[ bind ]: newValue
			});
		}
	}, [ bind ] );
	const handleChange = useCallback( ( event ) => {
		const newValue = event.target.checked;
		onChange( newValue );
		updateValue( newValue );
	}, [ onChange, updateValue ] );
	const handleKeyPress = useCallback( ( event ) => {
		if ( event.which === 13 ) {
			onChange( !value );
			updateValue( !value );
		}
	}, [ onChange, updateValue, value ] );
	const handleSpanChange = () => {
		const newValue = props.value !== null ? !props.value : !value;
		onChange( newValue );
		updateValue( newValue );
	};
	const input = <input
		className="checkbox-input"
		type="checkbox"
		checked={props.value !== null ? props.value : value}
		value="checkbox"
		onChange={handleChange}
		onKeyPress={handleKeyPress}
		disabled={disabled}
		aria-label={props.legend}
	></input>;
	if ( props.inline === true ) {
		return (
			<Tooltip tooltip={props.tooltip} placement={props.tooltipPlacement} >
				<span id={id} style={{ marginLeft: '8px', ...props.style }}>
					{input}
					<span
						role="button" tabIndex={0}
						className="checkbox-legend"
						style={{
							color: disabled ? 'darkgray' : null
						}}
						onClick={handleSpanChange} onKeyPress={handleSpanChange}
					>{props.legend}</span>
				</span>
			</Tooltip>
		);
	}
	const onSpanChange = disabled ? noop : handleSpanChange;
	if ( disabled ) {
		return (
			<Tooltip tooltip={props.tooltip} placement={props.tooltipPlacement} >
				<div id={id} className="input checkbox-input-div" style={props.style}>
					{input}
					<span
						className="checkbox-legend"
						style={{ color: 'darkgray' }}
					>{props.legend}</span>
				</div>
			</Tooltip>
		);
	}
	return (
		<Tooltip tooltip={props.tooltip} placement={props.tooltipPlacement} >
			<div id={id} className="input checkbox-input-div" style={props.style}>
				{input}
				<span
					role="button" tabIndex={0}
					className="checkbox-legend"
					onClick={onSpanChange} onKeyPress={onSpanChange}
				>{props.legend}</span>
			</div>
		</Tooltip>
	);
};


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


// EXPORTS //

export default CheckboxInput;
