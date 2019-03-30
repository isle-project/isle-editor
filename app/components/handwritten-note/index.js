// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './handwritten-note.css';

// MAIN //

/**
* A component displaying an image in the style of a polaroid.
*
* @property {number} duration - the time (in seconds) it takes until the button gets reactivated, default 3000 ms
* @property {function} block - display bottom in full width - dysfuntional still!
* @property {function} onClick - the click function
* @property {boolean} disabled - if disabled the button will be inactive, but the countdown starts
* @property {string} id - the timed button id
* @property {string} size - font size, passed to the native React button
* @property {string} type - button type, passed to the native React button
* @property {string} title - the button title
* @property {string} varfiant - passed to the button
*/
class HandwritteNote extends Component {
	constructor( props ) {
		super( props );

		this.state = {
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}


	refDimensions = (element) => {
		if (element) {
			console.log('Anzeige der Dimension');
			let x = element.getBoundingClientRect();
			console.log(x);

			this.setState({
			});
		}
	}

	getType = () => {
		let name = '';

		switch (this.props.type) {
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
		let name = 'handwritten-note';

		return (
			<div style={this.props.style} className={name} ref={this.refDimensions} >
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
