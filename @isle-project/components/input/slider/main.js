// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import roundn from '@stdlib/math/base/special/roundn';
import PINF from '@stdlib/constants/float64/pinf';
import NINF from '@stdlib/constants/float64/ninf';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';
import './slider.css';


// VARIABLES //

const debug = logger( 'isle:slider-input' );


// MAIN //

/**
* A slider input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} legend - caption of the input
* @property {number} defaultValue - The starting value of the slider
* @property {number} min - The minimum value of the slider
* @property {number} max - The maximum value of the slider
* @property {(number|string)} step - step size of the slider
* @property {boolean} inline - controls whether to place the slider inline with text or outside
* @property {number} precision - rounding of the input. The value will be rounded to have no more significant digits than the precision. For example, if one wishes to only use integers, a precision of 10 would be used, while if one wishes to round to the hundreds place, one would use a precision of 0.001
* @property {boolean} disabled - controls whether the slider input is active or not. If set to true, the slider will be present on the screen, albeit grayed-out
* @property {string} minLabel - label to be displayed to the left of slider instead of minimum value
* @property {string} maxLabel - label to be displayed to the right of slider instead of maximum value
* @property {boolean} hideTooltip - controls whether to hide tooltip
* @property {Object} style - CSS inline styles
* @property {Object} numberInputStyle - CSS inline styles for number input component
* @property {Object} rangeInputStyle - CSS inline style for range input component
* @property {Function} onChange - callback invoked with the new value when the slider value changes
*/
const SliderInput = ( props ) => {
	const { bind, defaultValue, legend, disabled, hideTooltip, inline, min, max, onChange, precision, step,
		minLabel, maxLabel, numberInputStyle, rangeInputStyle, style } = props;

	const { t } = useTranslation( 'input' );
	const session = useContext( SessionContext );
	const [ value, setValue ] = useState(
		bind && session.state ? session.state[ bind ] : defaultValue
	);
	useEffect( () => {
		if ( bind ) {
			const globalValue = global.lesson.state[ bind ];
			if ( globalValue !== value ) {
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
	}, [ bind ]);

	const finishChange = useCallback( ( event ) => {
		debug( 'Finalizing change...' );
		let newValue = event.target.value;
		if ( newValue !== '' ) {
			newValue = parseFloat( newValue );
		}
		if ( newValue > max ) {
			newValue = max;
		}
		else if ( newValue < min ) {
			newValue = min;
		}
		else if ( step === 1.0 && newValue !== '' ) {
			newValue = newValue - newValue % step;
		}
		debug( `Setting state value to: ${value}...` );
		if ( newValue !== value ) {
			setValue( newValue );
			onChange( newValue );
			if ( bind ) {
				global.lesson.setState({
					[ bind ]: value
				});
			}
		}
	}, [ bind, max, min, step, value, onChange ] );

	const handleInputChange = useCallback( ( event ) => {
		const valid = event.target.validity.valid;
		let newValue = event.target.value;
		debug( `Input value changed to ${value}` );
		setValue( newValue );

		if ( valid && newValue !== '' ) {
			newValue = parseFloat( newValue );
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
	}, [ bind, value, onChange ] );

	let tooltip = `${t('enter')} ${ step === 1 ? t('integer') : t('number')} `;
	if ( max !== PINF && min !== NINF ) {
		tooltip += `${t('between')} ${min} ${t('and')} ${max}:`;
	} else if ( min !== NINF ) {
		tooltip += `${t('larger-or-equal-to')} ${min}:`;
	} else if ( max !== PINF ) {
		tooltip += `${t('smaller-or-equal-to')} ${max}:`;
	} else {
		tooltip += ':';
	}
	let roundedValue;
	if ( value !== '' ) {
		roundedValue = roundn( value, ( -1.0 )*precision );
	} else {
		roundedValue = value;
	}
	const rangeInput = <input
		type="range"
		className="slider-range-input"
		min={min}
		max={max}
		step={step}
		value={roundedValue}
		disabled={disabled}
		onChange={handleInputChange}
		style={{
			float: inline ? 'none' : 'left',
			display: inline ? 'inline' : 'block',
			...rangeInputStyle
		}}
	/>;
	const numberInput = <input
		type="number"
		name="input"
		className="slider-number-input"
		disabled={disabled}
		min={min}
		max={max}
		step={step}
		value={roundedValue}
		onChange={handleInputChange}
		onBlur={finishChange}
		style={{
			float: inline ? 'none' : 'right',
			marginTop: legend && !inline ? -22 : 0,
			...numberInputStyle
		}}
		autoComplete="off"
	/>;
	if ( inline ) {
		return (
			<span className="input" style={{
				padding: '5px',
				opacity: disabled ? 0.2 : 1.0,
				...style
			}}>
				{ legend ?
					<label>{legend}:</label> :
					null
				}
				<span className="slider-range-wrapper" >
					<Badge bg="secondary" >{minLabel || min}</Badge>
					{rangeInput}
					<Badge bg="secondary" >{maxLabel || max}</Badge>
				</span>
				{numberInput}
			</span>
		);
	}
	return (
		<Tooltip
			id="sliderTooltip"
			placement="top"
			show={!hideTooltip}
			tooltip={disabled ? t('slider-disabled') : tooltip}
		>
			<div
				className="slider-outer-div input"
				style={{
					opacity: disabled ? 0.2 : 1.0,
					...style
				}}
			>
				{ legend ?
					<label>{legend}:</label> :
					null
				}
				<br />
				<span className="slider-range-wrapper" >
					<Badge bg="secondary" style={{ float: 'left' }} >{minLabel || min}</Badge>
					{rangeInput}
					<Badge bg="secondary" style={{ float: 'left' }} >{maxLabel || max}</Badge>
				</span>
				{numberInput}
				<br />
			</div>
		</Tooltip>
	);
};


// PROPERTIES //

SliderInput.defaultProps = {
	inline: false,
	legend: null,
	min: 0,
	minLabel: null,
	max: 100,
	maxLabel: null,
	step: 1,
	defaultValue: 10,
	onChange() {},
	precision: 10,
	disabled: false,
	hideTooltip: false,
	style: {},
	numberInputStyle: {},
	rangeInputStyle: {}
};

SliderInput.propTypes = {
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	max: PropTypes.number,
	maxLabel: PropTypes.string,
	min: PropTypes.number,
	minLabel: PropTypes.string,
	onChange: PropTypes.func,
	precision: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	hideTooltip: PropTypes.bool,
	style: PropTypes.object,
	numberInputStyle: PropTypes.object,
	rangeInputStyle: PropTypes.object
};


// EXPORTS //

export default SliderInput;
