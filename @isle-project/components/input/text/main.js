// MODULES //

import React, { useRef, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import generateUID from '@isle-project/utils/uid';
import SessionContext from '@isle-project/session/context.js';
import './text.css';


// VARIABLES //

const uid = generateUID( 'text-input' );


// MAIN //

/**
* A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {Function} onChange - A function to be called when a text value is changed
* @property {string} defaultValue - A value indicating the default value of the input at start
* @property {string} value - text value (for controlled component)
* @property {boolean} disabled - A boolean indicating whether the input is active or not
* @property {number} width - A number indicating the width of the input in pixels
* @property {boolean} inline - Indicates whether the input is displayed inline
* @property {string} legend - A string indicating the text displayed next to the number input
* @property {string} bind - name of global variable for the number to be assigned to
* @property {string} placeholder - A string indicating the value to be displayed before an initial choice is made
* @property {Object} style - CSS inline styles
* @property {Function} onBlur - callback function invoked when the text area loses focus
* @property {Function} onKeyPress - callback function to be invoked when any key is entered
* @property {Function} onKeyDown - callback function to be invoked when any key is pressed down
* @property {Function} onKeyUp - callback function to be invoked when key is released
*/
const TextInput = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const session = useContext( SessionContext );
	const { bind, defaultValue, placeholder } = props;
	const { t } = useTranslation( 'Input' );
	const [ value, setValue ] = useState(
		props.bind && session.state ? session.state[ props.bind ]: props.defaultValue
	);
	const textInput = useRef();
	useEffect( () => {
		setValue( global.lesson.state[ bind ] );
	}, [ bind ]);
	useEffect( () => {
		setValue( defaultValue );
	}, [ defaultValue ]);
	useEffect( () => {
		if ( bind ) {
			const globalVal = global.lesson.state[ bind ];
			if ( globalVal !== value ) {
				setValue( globalVal );
			}
		}
	}, [ bind, value ]);
	const handleChange = ( event ) => {
		const value = event.target.value;
		props.onChange( value );
		setValue( value );
		if ( bind ) {
			global.lesson.setState({
				[ bind ]: value
			});
		}
	};
	if ( props.value !== null ) {
		value = props.value;
	}
	if ( props.inline ) {
		return (
			<span className="input" style={props.style} >
				{ props.legend ? <label htmlFor={id} >
					{props.legend}:
				</label> : <span /> }
				<input
					id={id}
					className="text-inline-input"
					type="text"
					name="input"
					placeholder={isString( placeholder ) ? placeholder : t('enter-text')}
					value={value}
					ref={( input ) => {
						textInput.current = input;
					}}
					style={{
						width: props.width
					}}
					onChange={handleChange}
					onKeyPress={props.onKeyPress}
					onKeyDown={props.onKeyDown}
					onKeyUp={props.onKeyUp}
				/>
				{ props.description ?
					<span> ({props.description}) </span> :
					<span />
				}
			</span>
		);
	}
	return (
		<div className="input text-container-div" style={props.style} >
			<span>
				{ props.legend ?
					<label htmlFor={id} >{props.legend}:</label> :
					null
				}
				{ props.description ?
					<span> {props.description}</span> :
					<span />
				}
			</span>
			<input
				id={id}
				className="text-input"
				type="text"
				name="input"
				placeholder={isString( placeholder ) ? placeholder : t('enter-text')}
				value={value}
				ref={( input ) => {
					textInput.current = input;
				}}
				style={{
					width: props.width
				}}
				onBlur={props.onBlur}
				onChange={handleChange}
				onKeyPress={props.onKeyPress}
				onKeyDown={props.onKeyDown}
				onKeyUp={props.onKeyUp}
			/>
		</div>
	);
};


// PROPERTIES //

TextInput.defaultProps = {
	bind: null,
	defaultValue: '',
	value: null,
	legend: '',
	width: 80,
	onBlur() {},
	onChange() {},
	onKeyDown() {},
	onKeyPress() {},
	onKeyUp() {},
	inline: false,
	placeholder: null,
	style: {}
};

TextInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	inline: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyPress: PropTypes.func,
	onKeyUp: PropTypes.func,
	placeholder: PropTypes.string,
	width: PropTypes.number,
	style: PropTypes.object
};


// EXPORTS //

export default TextInput;
