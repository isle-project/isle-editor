// MODULES //

import React, { Component } from 'react';
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true
});


// MAIN //

class Text extends Component {

	render() {
		const { children } = this.props;
		const html = {
			__html: children ? md.renderInline( children ) : ''
		};
		return (
			<span
				dangerouslySetInnerHTML={html}
			>
			</span>
		);
	}

}


// EXPORTS //

export default Text;
