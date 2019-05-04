// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CodePane } from 'spectacle';


// MAIN //

/**
* Component displaying a styled, highlighted code preview.
*
* @property {string} lang - Prism compatible language name
* @property {string} source - code to be shown
* @property {string} className - class name
* @property {string} theme - `light`, `dark`, or `external` theme for the source editor's syntax highlighting
*/
class Wrapper extends Component {
	render(){
		return <CodePane {...this.props}>{this.props.children}</CodePane>;
	}
}


// PROPERTIES //

Wrapper.defaultProps = {
	lang: null,
	source: '',
	className: null,
	theme: 'dark'
};

Wrapper.propTypes = {
	lang: PropTypes.string,
	source: PropTypes.string,
	className: PropTypes.string,
	theme: PropTypes.oneOf([ 'light', 'dark', 'external' ])
};


// EXPORTS //

export default Wrapper;

