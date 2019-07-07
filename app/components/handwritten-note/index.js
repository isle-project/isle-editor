// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './handwritten-note.css';


// MAIN //

/**
* A component displaying some text as a handwritten note.
*
* @property {string} text - text to be displayed
* @property {string} type - note type (either `egg`, `tv`, or `oval`)
* @property {Object} formStyle - CSS inline styles for the type div
* @property {Object} style - CSS inline styles for the outer container
*/
class HandwritteNote extends Component {
	getType = () => {
		let name;
		switch ( this.props.type ) {
			case 'egg':
				name = 'handwritten-form-egg';
			break;
			case 'tv':
				name = 'handwritten-form-tv';
			break;
			case 'oval':
				name = 'handwritten-form-oval';
			break;
		}
		return name;
	}

	render() {
		return (
			<div style={this.props.style} className="handwritten-note" >
				<div style={this.props.formStyle} className={this.getType()}>
					<div className='handwritten-crayon'>{this.props.text}</div>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

HandwritteNote.propTypes = {
	style: PropTypes.object,
	formStyle: PropTypes.object,
	text: PropTypes.string,
	type: PropTypes.string
};

HandwritteNote.defaultProps = {
	formStyle: {},
	style: {},
	text: 'handwritten Note',
	type: 'handwritten-form-egg'
};


// EXPORTS //

export default HandwritteNote;
