// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './polaroid.css';


// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} image - the image which is displayed in the polaroid frame
* @property {Bool} removable - indicates whether the image is removable when clicking on the pin, default: false
* @property {Bool} id - this will allow a parent component to identify the image
* @property {Bool} image - image url
* @property {Function} callback - callback function (receives the id of the Polaroid as parameter)
* @property {Bool} showPin - shows a pin, default: false
* @property {Object} style - css definitions, override the style of the component
*/
class Polaroid extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			height: '100%',
			width: 'auto',
			touched: false,
			exit: false
		};
	}

	componentDidMount() {
		const self = this;
		if ( this.props.image ) {
			const image = new Image();
			image.src = this.props.image;
			image.onload = function loadImage() {
				if ( this.height > this.width ) {
					self.setFormat('high');
				}
				else self.setFormat('wide');
			};
		}
	}

	setFormat(type) {
		let width = '100%';
		let height = 'auto';
		if ( type === 'wide' ) {
			width = 'auto';
			height = '100%';
		}
		this.setState({
			width: width,
			height: height
		});
	}

	remove = (evt) => {
		evt.stopPropagation();
		this.setState({
			exit: true
		});
	}


	trigger = (event) => {
		if (this.props.callback) {
			this.props.callback(this.props.id);
		}
	}

	touch = () => {
		this.setState({
			touched: true
		});
	}

	untouch = () => {
		this.setState({
			touched: false
		});
	}

	render() {
		const format = this.state.width + ' ' + this.state.height;
		const background = {
			backgroundImage: 'url(' + this.props.image + ')',
			backgroundSize: format,
			backgroundPosition: 'center'
		};

		let imageClass = 'Polaroid';
		if ( this.props.id !== '') {
			imageClass = 'Polaroid clickablePolaroid';
		}

		if (this.state.exit === true) {
			imageClass = 'Polaroid PolaroidExit';
		}

		let innerImage = 'PolaroidImage';

		if (this.state.touched === true) {
			innerImage = 'PolaroidImage polaroid-touched';
		}

		return (
			<div id={this.props.id} onMouseOver={this.touch} onMouseOut={this.untouch} onClick={this.trigger} style={this.props.style} className={imageClass}>
				{ this.props.stain ? <div className={'PolaroidStain'} /> : null }
				<div style={background} className={innerImage}>
				</div>
				{ this.props.showPin ? <div className={'PolaroidPin'} /> : null }
				{ this.props.removable ? <div onClick={this.remove} className={'PinImageMap'} /> : null }
			</div>
		);
	}
}


// PROPERTIES //

Polaroid.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	image: PropTypes.string,
	callback: PropTypes.func,
	removable: PropTypes.bool,
	showPin: PropTypes.bool

};

Polaroid.defaultProps = {
	id: '',
	image: null,
	callback: null,
	removable: false,
	showPin: false,
	style: {}
};


// EXPORTS //

export default Polaroid;
