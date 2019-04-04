// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './background.css';


// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} images - list of image URLs to be displayed
* @property {number} time - duration each background image is displayed (in seconds)
* @property {string} in - entrance effect name (either `fade-in`, `slide-left-in`, and `flip-hor-bottom-in`)
* @property {string} out - exit effect name (either `fade-out`, `slide-right-out`, and `flip-hor-bottom-out`)
* @property {number} inTime - length of the enter effect (in seconds)
* @property {number} outTime - length of the exit effect (in seconds)
* @property {bool} parent - sets the parent divs backgroundColor to transparent, overflow to hidden
*/
class Background extends Component {
	constructor( props ) {
		super( props );
		this.myRef = React.createRef();
		this.start = true;

		this.imageList = [];
		this.state = {
			ratio: 1.777,
			fading: true,
			backgroundImage: props.images[0],
			foregroundImage: props.images[1],
			foregroundRatio: 1.777,
			backgroundRatio: 1.777,
			counter: 0,
			initialized: true
		};
	}

	componentDidMount() {
		this.getRatio();
		this.preload();
		if (this.props.parent === true) {
			this.modifyParent();
		}
		this.changeBackground();
		window.addEventListener( 'resize', this.getRatio );
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.getRatio );
	}

	getRatio = () => {
		const parent = this.myRef.current.parentElement;
		let w = parent.clientWidth;
		let h = parent.clientHeight;

		const ratio = parseFloat( w / h ).toFixed( 4 );

		this.setState({
			ratio: ratio
		});
	}

	initialize(image) {
		var self = this;
		image.onload = function loadImage() {
			let ratio = image.width / image.height;

			self.setState({
				initialized: true,
				foregroundRatio: ratio
			});
		};
	}

	preload() {
		for ( let i = 0; i < this.props.images.length; i++ ) {
			const img = new Image();
			img.src = this.props.images[ i ];
			this.imageList.push( img );
			if (i === 0) {
				this.initialize(img);
			}
		}
	}

	modifyParent = () => {
		const parent = this.myRef.current.parentElement;
		if ( parent.attributes.class !== 'lesson' ) {
			parent.style.backgroundColor = 'transparent';
			parent.style.overflow = 'hidden';

			let h = parent.clientHeight;
			global.parent = parent;

			if (h === 0) {
				alert('Please define the height of the div which contains the Background component');
				parent.style.width = '600px';
				parent.style.height = '320px';
				console.log('You have to define width and height for the parent element of the background');
			}
		}
	}

	getImageRatio(ct) {
		if ( this.imageList[ct] ) {
			let img = this.imageList[ct];
			return img.width / img.height;
		}
	}

	changeBackground = () => {
		let ct = this.state.counter;
		if ( this.state.fading ) {
			let bct = ct - 1;
			const fgRatio = this.getImageRatio( ct );
			if ( ct === 0 ) {
				bct = this.props.images.length -1;
			}
			const bgRatio = this.getImageRatio( bct );
			this.setState({
				foregroundImage: this.props.images[ct],
				backgroundImage: this.props.images[bct],
				foregroundRatio: fgRatio,
				backgroundRatio: bgRatio,
				fading: false
			});
		} else {
			let newCt = ct+2;
			if ( newCt > this.props.images.length-1 ) {
				newCt = 0;
			}

			let fgCt = ct + 1;
			if (fgCt === this.props.images.length) {
				fgCt = this.props.images.length -1;
			}

			const fgRatio = this.getImageRatio(ct);
			const bgRatio = this.getImageRatio(fgCt);
			this.setState({
				foregroundImage: this.props.images[fgCt],
				backgroundImage: this.props.images[ct],
				foregroundRatio: fgRatio,
				backgroundRatio: bgRatio,
				fading: true,
				counter: newCt
			});
		}
		setTimeout( this.changeBackground, this.props.time*1000 );
	}

	resizeImage( ratio ) {
		let style;
		if ( ratio < this.state.ratio ) {
			style = {
				width: '100%',
				height: 'auto'
			};
		} else {
			style = {
				width: 'auto',
				height: '100%'
			};
		}
		return style;
	}

	startProcess() {
		const ani = this.props.in + ' ' + this.props.inTime + 's forwards';
		const foreground = {
			animation: ani
		};

		const low = this.resizeImage( this.state.foregroundRatio );
		return (
			<div>
				<div className="enter-foreground" style={foreground} >
					<img style={low} src={this.state.foregroundImage} />
				</div>
			</div>
		);
	}

	exit() {
		const ani = this.props.out + ' ' + this.props.outTime + 's forwards';
		const background = {
			animation: ani
		};
		const low = this.resizeImage( this.state.foregroundRatio );
		const lowB = this.resizeImage( this.state.backgroundRatio );
		return (
			<div>
				<div className="exit-foreground">
					<img style={low} src={this.state.foregroundImage} />
				</div>
				<div className="exit-background" style={background} >
					<img style={lowB} src={this.state.backgroundImage} />
				</div>
			</div>
		);
	}

	enter() {
		const ani = this.props.in + ' ' + this.props.inTime + 's forwards';
		const foreground = {
			animation: ani
		};
		const low = this.resizeImage( this.state.foregroundRatio );
		const lowB = this.resizeImage( this.state.backgroundRatio );
		return (
			<div>
				<div className="enter-foreground" style={foreground} >
					<img style={low} src={this.state.foregroundImage} />
				</div>
				<div className="enter-background">
					<img style={lowB} src={this.state.backgroundImage} />
				</div>
			</div>
		);
	}

	render() {
		if ( this.state.fading === false) {
			if (this.start === true) {
				if (this.state.initialized === false) {
					return null;
				}
				this.start = false;

				return (
					<div ref={this.myRef}>{ this.startProcess() }</div>
				);
			}

			return (
				<div ref={this.myRef}>{ this.enter() }</div>
			);
		}
		return (
			<div ref={this.myRef}>{ this.exit() }</div>
		);
	}
}


// PROPERTIES //

Background.propTypes = {
	images: PropTypes.arrayOf( PropTypes.string ),
	time: PropTypes.number,
	in: PropTypes.string,
	out: PropTypes.string,
	parent: PropTypes.bool,
	inTime: PropTypes.number,
	outTime: PropTypes.number
};

Background.defaultProps = {
	images: [],
	time: 3,
	in: 'fade-in',
	out: 'fade-out',
	parent: false,
	inTime: 1,
	outTime: 1
};


// EXPORTS //

export default Background;
