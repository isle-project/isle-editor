// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './background.css';


// VARIABLES //

let bgArray = [
	'https://isle.heinz.cmu.edu/Summertime_YoungGamer.jpeg',
	'https://isle.heinz.cmu.edu/Summertime_cogs.jpeg'
];


// MAIN //

class Background extends Component {
	constructor( props ) {
		super( props );

		this.imageList=[];

		if (props.imageList) bgArray = this.props.imageList;

		this.state = {
			ratio: 1.777,
			fading: true,
			backgroundImage: bgArray[0],
			foregroundImage: bgArray[1],
			foregroundRatio: 1.777,
			backgroundRatio: 1.777,
			counter: 0,
			in: props.in,
			inTime: props.inTime,
			outTime: props.outTime,
			out: props.out
		};
	}

	componentDidMount() {
		if ( this.props.time ) {
			this.getRatio();
			this.preload();
			this.setImages();
			window.addEventListener( 'resize', this.getRatio );
		}
	}

	getRatio = () => {
		var w = window.innerWidth;
		var h = window.innerHeight;
		let ratio = parseFloat(w/h).toFixed(4);

		this.setState({
			ratio: ratio
		});
	}

	preload() {
		if ( this.bgArray !== null ) {
			for ( let i = 0; i < bgArray.length; i++ ) {
				const img = new Image();
				img.src = bgArray[ i ];
				this.imageList.push( img );
			}
		}
	}

	getImageRatio(ct) {
		if (this.imageList[ct]) {
			let img = this.imageList[ct];
			return img.width/img.height;
		}
	}

	setImages() {
		let ct = this.state.counter;

		if (this.state.fading) {
			let bct = ct -1;
			let fgRatio = this.getImageRatio(ct);
			if (ct === 0) bct = bgArray.length -1;
			let bgRatio = this.getImageRatio(bct);
			this.setState({
					foregroundImage: bgArray[ct],
					backgroundImage: bgArray[bct],
					foregroundRatio: fgRatio,
					backgroundRatio: bgRatio,
					fading: false
				});
		} else {
				let newCt = ct+2;
				if (newCt >= bgArray.length-1) newCt = 0;

				let fgRatio = this.getImageRatio(ct);
				let bgRatio = this.getImageRatio(ct+1);

				this.setState({
					foregroundImage: bgArray[ct+1],
					backgroundImage: bgArray[ct],
					foregroundRatio: fgRatio,
					backgroundRatio: bgRatio,
					fading: true,
					counter: newCt
				});
		}

		setTimeout(this.changeBackground, this.props.time);
	}

	changeBackground = () => {
		this.setImages();
	}

	resizeImage( ratio ) {
		let style = {
			width: 'auto',
			height: '100%'
		};

		if (ratio < this.state.ratio) {
			style = {
				width: '100%',
				height: 'auto'
			};
		}
		return style;
	}

	exit() {
		const ani = this.state.out + ' ' + this.state.outTime + 's forwards';
		const foreground = {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			opacity: 1,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			fontFamily: 'Open Sans',
			backgroundColor: 'white',
			zIndex: -2
		};
		const background = {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			opacity: 1,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			fontFamily: 'Open Sans',
			zIndex: -1,
			animation: ani
		};

		const low = this.resizeImage(this.state.foregroundRatio);
		const lowB = this.resizeImage(this.state.backgroundRatio);
		return (
			<div>
				<div className="NeueAnimation" style={foreground} >
					<img style={low} src={this.state.foregroundImage} />
				</div>
				<div style={background} >
					<img style={lowB} src={this.state.backgroundImage} />
				</div>
			</div>
		);
	}

	enter() {
		const ani = this.state.in + ' ' + this.state.inTime + 's forwards';
		const foreground = {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			opacity: 1,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			zIndex: -1,
			animation: ani
		};
		const background = {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			opacity: 1,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			zIndex: -2
		};

		const low = this.resizeImage(this.state.foregroundRatio);
		const lowB = this.resizeImage(this.state.backgroundRatio);
		return (
			<div>
				<div style={foreground} >
					<img style={low} src={this.state.foregroundImage} />
				</div>
				<div style={background} >
					<img style={lowB} src={this.state.backgroundImage} />
				</div>
			</div>
		);
	}

	render() {
		if (this.state.fading === false) {
			return (
				<div>{ this.enter() }</div>
			);
		}

		return (
			<div>{ this.exit() }</div>
		);
	}
}


// PROPERTIES //

Background.propTypes = {
	imageList: PropTypes.arrayOf(PropTypes.string),
	time: PropTypes.number,
	in: PropTypes.string,
	out: PropTypes.string,
	inTime: PropTypes.number,
	outTime: PropTypes.number
};

Background.defaultProps = {
	imageList: [],
	time: 3000,
	in: 'fade-in',
	out: 'fade-out',
	inTime: 1,
	outTime: 1
};


// EXPORTS //

export default Background;
