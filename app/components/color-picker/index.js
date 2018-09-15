// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';


// MAIN //

/**
* A wrapper for the [react-color](https://casesandberg.github.io/react-color/) colorpicker.
*
* @property {(string|Object)} color - `string` holding an HeX code or an `object` holding RGB or HSL values such as `{ r: 255, g: 255, b: 255 }` or `{ h: 0, s: 0, l: .10 }`, which determines the active color. Both accept an `a` property for alpha values other than one
* @property {boolean} disableAlpha - controls whether to remove alpha slider and options
* @property {Array<string>} presetColors - HeX `strings` specifying the default colors at the bottom of the colorpicker
* @property {number} width - width of the colorpicker (in px)
* @property {Function} onChange - callback invoked every time color is changed
* @property {Function} onChangeComplete - callback invoked once a color change is complete
*/
class ColorPicker extends Component {
	render() {
		return (
			<div style={{ width: '50%', margin: '0 auto' }}>
				<SketchPicker {...this.props} />
			</div>
		);
	}
}


// PROPERTIES //

ColorPicker.propTypes = {
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	disableAlpha: PropTypes.bool,
	presetColors: PropTypes.arrayOf( PropTypes.string ),
	width: PropTypes.number,
	onChange: PropTypes.func,
	onChangeComplete: PropTypes.func
};

ColorPicker.defaultProps = {
	color: '#fff',
	disableAlpha: false,
	presetColors: [ '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF' ],
	width: 200,
	onChange() {},
	onChangeComplete() {}
};


// EXPORTS //

export default ColorPicker;
