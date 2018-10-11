/**
* Adapted from spectacle-code-slide@0.5.2 (MIT Licensed) https://github.com/jamiebuilds/spectacle-code-slide
*/

// MODULES //

import React, { Component } from 'react';
import { Image } from 'spectacle';


// VARIABLES //

const style = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
};


// MAIN //

class CodeSlideImage extends Component {
	render() {
		return (
			<Image src={this.props.src} style={style} />
		);
	}
}


// EXPORTS //

export default CodeSlideImage;
