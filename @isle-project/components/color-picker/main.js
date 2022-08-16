// MODULES //

import React, { Fragment, memo, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import PopoverBody from 'react-bootstrap/PopoverBody';
import Loadable from '@isle-project/components/internal/loadable';
const SketchPicker = Loadable( () => import( 'react-color/lib/components/sketch/Sketch' ) );
const CompactPicker = Loadable( () => import( 'react-color/lib/components/compact/Compact' ) );
const MaterialPicker = Loadable( () => import( 'react-color/lib/components/material/Material' ) );
const BlockPicker = Loadable( () => import( 'react-color/lib/components/block/Block' ) );
import { withPropCheck } from '@isle-project/utils/prop-check';


// FUNCTIONS //

const ButtonColorPicker = ( pickerProps ) => {
	const [ show, setShow ] = useState( false );
	const target = useRef( null );
	const handleClick = useCallback( () => {
		setShow( !show );
	}, [ show ] );
	return (
		<Fragment>
			<Button ref={target} size="sm" style={{
				backgroundColor: pickerProps.color, width: 38, height: 38, ...pickerProps.buttonStyle
			}} onClick={handleClick} >
			</Button>
			{ show ? <Overlay target={target.current} show={show} placement="right" >
			{({ placement, arrowProps, show: _show, popper, ...props }) => (
				<Popover {...props} id={`${props.variant}-popover`} className="cancel" style={{ zIndex: 1051, ...pickerProps.style, ...props.style }} >
					<PopoverBody>
						<SketchPicker {...pickerProps} />
					</PopoverBody>
				</Popover>
			)}
			</Overlay> : null }
		</Fragment>
	);
};


// MAIN //

/**
* A wrapper for the [react-color](https://casesandberg.github.io/react-color/) color picker.
*
* @property {string} variant - color picker variant (either `Compact`, `Sketch`, `Material`, `Button`, or `Block`)
* @property {(string|Object)} color - `string` holding an HeX code or an `object` holding RGB or HSL values such as `{ r: 255, g: 255, b: 255 }` or `{ h: 0, s: 0, l: .10 }`, which determines the active color. Both accept an `a` property for alpha values other than one
* @property {boolean} disableAlpha - controls whether to remove alpha slider and options
* @property {Array<string>} presetColors - HeX `strings` specifying the default colors at the bottom of the colorpicker
* @property {number} width - width of the color picker (in px)
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked every time color is changed
* @property {Function} onChangeComplete - callback invoked once a color change is complete
*/
const ColorPicker = ( props ) => {
	let colorPicker;
	switch ( props.variant ) {
		case 'Block':
			colorPicker = <BlockPicker {...props} />;
			break;
		case 'Compact':
			colorPicker = <CompactPicker {...props} />;
			break;
		case 'Material':
			colorPicker = <MaterialPicker {...props} />;
			break;
		case 'Button': {
			colorPicker = <ButtonColorPicker {...props} />;
			break;
		}
		case 'Sketch':
		default:
			colorPicker = <SketchPicker {...props} />;
			break;
	}
	return (
		<div className={props.className} style={{ width: 'fit-content', margin: '0 auto', ...props.style }}>
			{colorPicker}
		</div>
	);
};


// PROPERTIES //

ColorPicker.propTypes = {
	variant: PropTypes.oneOf([
		'Sketch', 'Material', 'Block', 'Compact', 'Button'
	]),
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	disableAlpha: PropTypes.bool,
	presetColors: PropTypes.arrayOf( PropTypes.string ),
	width: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onChangeComplete: PropTypes.func
};

ColorPicker.defaultProps = {
	variant: 'Sketch',
	color: '#fff',
	disableAlpha: false,
	presetColors: [ '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF' ],
	width: 200,
	className: '',
	style: {},
	onChange() {},
	onChangeComplete() {}
};


// EXPORTS //

export default withPropCheck( memo( ColorPicker ) );
