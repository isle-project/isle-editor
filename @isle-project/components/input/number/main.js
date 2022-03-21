// MODULES //

import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import contains from '@stdlib/assert/contains';
import isnan from '@stdlib/math/base/assert/is-nan';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isNull from '@stdlib/assert/is-null';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import PINF from '@stdlib/constants/float64/pinf';
import NINF from '@stdlib/constants/float64/ninf';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';
import generateUID from '@isle-project/utils/uid';
import createTooltip from './create_tooltip.js';
import './number.css';


// VARIABLES //

const debug = logger( 'isle:number-input' );
const uid = generateUID( 'number-input' );


// MAIN //

/**
* A number input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} bind - name of global variable for the number to be assigned to
* @property {number} value - number value (for controlled component)
* @property {number} defaultValue - value indicating the default value of the input at startup
* @property {boolean} disabled - boolean indicating whether the input is active or not
* @property {number} min - number indicating the smallest possible value that may be inserted
* @property {number} max - number indicating the maximum value that may be inserted
* @property {(number|string)} step - number indicating the incremental changes when using the increment arrows
* @property {boolean} inline - indicates whether the input is displayed inline
* @property {string} legend - string indicating the text displayed next to the number input
* @property {boolean} numbersOnly - controls whether only numbers are accepted
* @property {string}} placeholder - string indicating the text displayed when the input is empty (requires `defaultValue` to be set to `null` or `undefined`)
* @property {string} tooltip - tooltip string (if not set, the tooltip is automatically generated)
* @property {string} tooltipPlacement - direction of the tooltip
* @property {Object} style - CSS inline styles
* @property {Object} inputStyle - CSS inline styles for input element
* @property {Function} onBlur - callback function to be invoked when using a blur method
* @property {Function} onChange - callback function to be invoked when number input is changed
* @property {Function} onKeyPress - callback function to be invoked when any key is entered
* @property {Function} onKeyDown - callback function to be invoked when any key is pressed down
* @property {Function} onKeyUp - callback function to be invoked when key is released
*/
const NumberInput = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const { bind, defaultValue, min, max, step, value: propValue, onBlur, onChange } = props;
	const { t } = useTranslation( 'input' );
	const session = useContext( SessionContext );
	const [ value, setValue ] = useState(
		propValue || ( bind && session.state ?
			session.state[ bind ]:
			defaultValue ),
	);
	useEffect( () => {
		if ( bind ) {
			const globalValue = global.lesson.state[ bind ];
			if ( globalValue !== value && isNumber( value ) ) {
				setValue( globalValue );
			}
		}
	}, [ bind, value ] );
	useEffect( () => {
		setValue( defaultValue );
	}, [ defaultValue ] );
	useEffect( () => {
		if ( bind ) {
			setValue( global.lesson.state[ bind ] );
		}
	}, [ bind ] );

	const handleChange = useCallback( ( event ) => {
		debug( 'Handle change of input field...' );
		let valid = event.target.validity.valid;
		let newValue = event.target.value;
		setValue( newValue );
		if ( propValue ||
			( valid && newValue !== '' &&
			newValue !== '-' && newValue !== '.' && newValue !== '-.' )
		) {
			newValue = parseFloat( newValue );
			if ( isnan( newValue ) ) {
				newValue = '';
			}
			onChange( newValue );
			if ( bind ) {
				global.lesson.setState({
					[ bind ]: newValue
				});
			}
		} else if ( bind ) {
			global.lesson.setState({
				[ bind ]: newValue
			});
		}
	}, [ bind, propValue, onChange ] );
	const finishChange = useCallback( ( event ) => {
		debug( 'Finished change...' );
		let newValue = event.target.value;
		if ( contains( newValue, '/' ) ) {
			debug( 'Encountered a fraction...' );
			const splitted = newValue.split( '/' );
			if ( splitted[ 0 ] !== '' && splitted[ 1 ] !== '' ) {
				newValue = parseFloat( splitted[ 0 ]) / parseFloat( splitted[ 1 ]);
			}
		}
		if ( isnan( newValue ) ) {
			newValue = '';
		}
		else if (
			newValue !== '' && newValue !== '-' &&
			newValue !== '.' && newValue !== '-.'
		) {
			newValue = parseFloat( newValue );
		}
		if ( newValue > max ) {
			newValue = max;
		}
		else if ( newValue < min ) {
			newValue = min;
		}
		else if (
			step === 1.0 && newValue !== '' &&
			newValue !== '-' && newValue !== '.' && newValue !== '-.'
		) {
			newValue = newValue - newValue % step;
		}
		onChange( newValue );
		onBlur( newValue );
		if ( newValue !== value ) {
			setValue( newValue );
			if ( bind ) {
				global.lesson.setState({
					[ bind ]: newValue
				});
			}
		}
	}, [ bind, min, max, step, value, onBlur, onChange ] );
	const tooltip = isNull( props.tooltip ) ? createTooltip({
		min, max, step, t
	}) : props.tooltip;
	if ( props.inline === true ) {
		const input =
			<span className="input" style={{ padding: '5px', ...props.style }}>
				{ props.legend ? <label htmlFor={id.current} > {props.legend} =  </label> : null }
				<input
					id={id.current}
					type={props.numbersOnly ? 'number' : 'text'}
					name="input"
					className="number-number-input"
					disabled={props.disabled}
					value={propValue !== null ? propValue : value}
					placeholder={props.placeholder}
					step={props.step}
					min={props.min}
					max={props.max}
					style={{
						width: '80px',
						paddingLeft: '6px',
						marginLeft: '3px',
						...props.inputStyle
					}}
					onChange={handleChange}
					onBlur={finishChange}
					onKeyPress={props.onKeyPress}
					onKeyDown={props.onKeyDown}
					onKeyUp={props.onKeyUp}
					autoComplete="off"
				/>
				{ props.description ?
					<span>({props.description})</span> :
					<span />
				}
			</span>;
		return props.disabled ?
			input:
			<Tooltip id="number-input-tooltip-inline" placement="top" show={!props.disabled} tooltip={tooltip} >
				{input}
			</Tooltip>;
	}
	const input = <input
		id={id.current}
		type={props.numbersOnly ? 'number' : 'text'}
		name="input"
		className="number-number-input"
		disabled={props.disabled}
		value={propValue !== null ? propValue : value}
		placeholder={props.placeholder}
		step={props.step}
		min={props.min}
		max={props.max}
		style={{
			width: '80px',
			marginLeft: '24px',
			...props.inputStyle
		}}
		onChange={handleChange}
		onBlur={finishChange}
		onKeyPress={props.onKeyPress}
		onKeyDown={props.onKeyDown}
		onKeyUp={props.onKeyUp}
		autoComplete="off"
	/>;
	return ( <div className="input" style={{
		marginBottom: '4px',
		marginTop: '4px',
		...props.style
	}}>
		{ props.legend ?
			<span>
				<label htmlFor={id.current} >
					{isString( props.legend ) ?
						props.legend+':' :
						props.legend
					}
				</label>
				{ props.description ?
					<span> {props.description}</span> :
					null
				}
			</span> : null
		}
		<Tooltip
			id="number-input-tooltip" placement={props.tooltipPlacement}
			tooltip={tooltip} show={!props.disabled}
		><span className="number-input-span" >{input}</span></Tooltip>
	</div> );
};


// PROPERTIES //

NumberInput.defaultProps = {
	bind: '',
	disabled: false,
	legend: null,
	min: NINF,
	max: PINF,
	step: 1,
	defaultValue: 0,
	onBlur() {},
	onChange() {},
	onKeyDown() {},
	onKeyPress() {},
	onKeyUp() {},
	inline: false,
	numbersOnly: true,
	placeholder: '0',
	style: {},
	inputStyle: {},
	value: null,
	tooltip: null,
	tooltipPlacement: 'left'
};

NumberInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	max: PropTypes.number,
	min: PropTypes.number,
	numbersOnly: PropTypes.bool,
	placeholder: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyPress: PropTypes.func,
	onKeyUp: PropTypes.func,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object,
	inputStyle: PropTypes.object,
	value: PropTypes.number,
	tooltip: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ])
};


// EXPORTS //

export default NumberInput;
