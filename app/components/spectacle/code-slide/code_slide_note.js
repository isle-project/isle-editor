/**
* Adapted from spectacle-code-slide@0.5.2 (MIT Licensed) https://github.com/jamiebuilds/spectacle-code-slide
*/

// MODULES //

import React, { Component } from 'react';


// VARIABLES //

const style = {
	position: 'fixed',
	bottom: '20px',
	width: '100%',
	padding: '20px',
	background: 'black',
	color: 'white',
	fontSize: '1.5em',
	fontFamily: 'monospace',
	textAlign: 'left'
};


// MAIN //

class CodeSlideNote extends Component {
	render() {
		return (
			<div style={style}>
			{this.props.children}
			</div>
		);
	}
}


// EXPORTS //

export default CodeSlideNote;
