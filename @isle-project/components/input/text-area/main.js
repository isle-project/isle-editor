// MODULES //

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import { isPrimitive as isString } from '@stdlib/assert/is-string';


// MAIN //

/**
* A text area component. Used as a stand-alone component, changes should be handled via the `onChange` attribute.
*
* @property {string} defaultValue - default value of the text area
* @property {string} value - text value (for controlled component)
* @property {boolean} disabled - controls whether the text area shall be disabled
* @property {string} legend - legend text
* @property {string} placeholder - placeholder text
* @property {string} resizable - controls whether the text area shall be resizable (can be either `both`, `horizontal`, `vertical`, or `none`)
* @property {number} rows - number of rows
* @property {Object} style - CSS inline styles
* @property {Function} onBlur - callback function invoked when the text area loses focus
* @property {Function} onChange - callback function invoked with the new text when the area text changes
*/
const TextArea = ( props ) => {
	const { id } = useActionLogger( 'TEXT_AREA', props );
	const { defaultValue, placeholder, onChange } = props;
	const [ value, setValue ] = useState( props.value || defaultValue );
	const { t } = useTranslation( 'input' );
	const textarea = useRef();

	useEffect( () => {
		setValue( defaultValue );
	}, [ defaultValue ]);

	const handleChange = useCallback( ( event ) => {
		setValue( event.target.value );
		onChange( event.target.value );
	}, [ onChange ] );

	let legend;
	if ( props.legend ) {
		legend = <FormLabel htmlFor={id} >
			{props.legend}
		</FormLabel>;
	}
	return (
		<FormGroup className="input" id={`${id}-form`} >
			{legend}
			<FormControl
				id={id}
				as="textarea"
				placeholder={isString( placeholder ) ? placeholder : t('enter-text')}
				ref={div => { textarea.current = div; }}
				onBlur={props.onBlur}
				onChange={handleChange}
				style={{
					resize: props.resizable,
					...props.style
				}}
				rows={props.rows}
				value={props.value !== null ? props.value : value}
				disabled={props.disabled}
			/>
		</FormGroup>
	);
};


// PROPERTIES //

TextArea.defaultProps = {
	defaultValue: '',
	value: null,
	disabled: false,
	legend: '',
	onBlur() {},
	onChange() {},
	placeholder: null,
	resizable: 'none',
	rows: 5,
	style: {}
};

TextArea.propTypes = {
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	resizable: PropTypes.string,
	rows: PropTypes.number,
	style: PropTypes.object
};


// EXPORTS //

export default TextArea;
