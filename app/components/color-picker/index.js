// MODULES //

import React, { Component } from 'react';
import { SketchPicker } from 'react-color';


// COLOR PICKER //

class ColorPicker extends Component {
	render() {
		return (
			<div style={{ width: '50%', margin: '0 auto' }}>
				<SketchPicker {...this.props} />
			</div>
		);
	}
}


// EXPORTS //

export default ColorPicker;
