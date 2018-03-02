// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true
});


// MAIN //

class Text extends Component {
	render() {
		const { children, raw } = this.props;
		let content;
		if ( raw ) {
			content = raw;
		} else {
			content = children || '';
		}
		const html = {
			__html: md.renderInline( content )
		};
		return (
			<span
				dangerouslySetInnerHTML={html} // eslint-disable-line react/no-danger
			>
			</span>
		);
	}
}


// PROPERTIES //

Text.defaultProps = {
	raw: ''
};

Text.propTypes = {
	raw: PropTypes.bool
};


// EXPORTS //

export default Text;
