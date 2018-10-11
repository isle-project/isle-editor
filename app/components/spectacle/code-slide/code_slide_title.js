/**
* Adapted from spectacle-code-slide@0.5.2 (MIT Licensed) https://github.com/jamiebuilds/spectacle-code-slide
*/

// MODULES //

import React, { Component } from 'react';


// VARIABLES //

const styles = {
	position: 'fixed',
	left: '50%',
	top: '20px',
	transform: 'translate(-50%)',
	padding: '20px 40px',
	fontSize: '2.5em',
	whiteSpace: 'nowrap',
	color: 'white'
};


// MAIN //

class CodeSlideTitle extends Component {
	render() {
		return (
			<h1 style={styles}>{this.props.children}</h1>
		);
	}
}


// EXPORTS //

export default CodeSlideTitle;
