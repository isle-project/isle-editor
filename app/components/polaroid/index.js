// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import './polaroid.css';


// MAIN //

/**
* A component displaying an image in the style of a polaroid.
*
* @property {Array} image - the image which is displayed in the polaroid frame
* @property {boolean} removable - indicates whether the image is removable when clicking on the pin
* @property {string} image - image URL
* @property {Function} onClick - event handler invoked when image is clicked (receives the id of the Polaroid as parameter)
* @property {boolean} showPin - shows a pin
* @property {Object} style - CSS inline styles
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
					self.setFormat( 'high' );
				}
				else self.setFormat( 'wide' );
			};
		}
	}

	setFormat( type ) {
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

	remove = ( evt ) => {
		evt.stopPropagation();
		this.setState({
			exit: true
		});
	}

	trigger = () => {
		if ( this.props.onClick !== noop ) {
			this.props.onClick( this.props.id );
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
		let imageClass = 'polaroid';
		if ( this.props.onClick !== noop ) {
			imageClass += ' clickable-polaroid';
		}
		if ( this.state.exit === true ) {
			imageClass += ' polaroid-exit';
		}
		let innerImage = 'polaroid-image';
		if ( this.state.touched === true ) {
			innerImage = 'polaroid-image polaroid-touched';
		}
		return (
			<div id={this.props.id} onMouseOver={this.touch} onMouseOut={this.untouch} onClick={this.trigger} style={this.props.style} className={imageClass} >
				<div className="polaroid-wrapper">
					{this.props.stain ? <div className="polaroid-stain" /> : null}
					<div style={background} className={innerImage} />
					{this.props.showPin ? <div className="polaroid-pin" /> : null}
					{this.props.removable ? <div onClick={this.remove} className="pin-image-map" /> : null }
				</div>
			</div>
		);
	}
}


// PROPERTIES //

Polaroid.propTypes = {
	image: PropTypes.string,
	removable: PropTypes.bool,
	showPin: PropTypes.bool,
	style: PropTypes.object,
	onClick: PropTypes.func
};

Polaroid.defaultProps = {
	image: null,
	removable: false,
	showPin: false,
	style: {},
	onClick: noop
};


// EXPORTS //

export default Polaroid;
