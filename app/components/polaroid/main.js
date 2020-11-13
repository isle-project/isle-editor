// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDraggable from 'react-draggable';
import './polaroid.css';


// MAIN //

/**
* A component displaying an image in the style of a polaroid.
*
* @property {string} image - the URL of the image to be displayed in the polaroid frame
* @property {boolean} draggable - controls whether one can drag the polaroid around the screen
* @property {Function} onClick - event handler invoked when image is clicked (receives the id of the Polaroid as parameter)
* @property {boolean} showPin - shows a pin
* @property {number} width - polaroid width (in px)
* @property {Object} style - CSS inline styles
*/
class Polaroid extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			height: '100%',
			width: 'auto',
			touched: false
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

	trigger = () => {
		if ( this.props.onClick ) {
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
		if ( this.props.onClick ) {
			imageClass += ' clickable-polaroid';
		}
		let innerImage = 'polaroid-image';
		if ( this.state.touched === true ) {
			innerImage = 'polaroid-image polaroid-touched';
		}
		const style = {
			...this.props.style
		};
		style.width = this.props.width;
		style.height = style.width * 1.10;
		const out = <div
			id={this.props.id} role="button" tabIndex={0}
			onMouseOver={this.touch} onFocus={this.touch}
			onMouseOut={this.untouch} onBlur={this.untouch}
			onClick={this.trigger} onKeyPress={this.trigger}
			style={style} className={imageClass}
		>
			<div className="polaroid-wrapper" >
				{this.props.stain ? <div className="polaroid-stain" /> : null}
				<div style={background} className={innerImage} />
				{this.props.showPin ? <div className="polaroid-pin" /> : null}
			</div>
		</div>;
		if ( this.props.draggable ) {
			return <ReactDraggable>{out}</ReactDraggable>;
		}
		return out;
	}
}


// PROPERTIES //

Polaroid.propTypes = {
	image: PropTypes.string,
	draggable: PropTypes.bool,
	showPin: PropTypes.bool,
	width: PropTypes.number,
	style: PropTypes.object,
	onClick: PropTypes.func
};

Polaroid.defaultProps = {
	image: null,
	draggable: false,
	showPin: false,
	width: 350,
	style: {},
	onClick: null
};


// EXPORTS //

export default Polaroid;
