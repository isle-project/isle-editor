// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Dimensions from 'components/dimensions';


// FUNCTIONS //

function calculateMargin( containerWidth, targetWidth ) {
	const x = ( containerWidth - targetWidth ) / 2.0;
	return `${x | 0}px`;
}


// VIDEO //

class Video extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			progress: {}
		};
	}

	handlePlay = () => {
		const { session } = this.context;
		session.log({
			id: this.props.id,
			type: 'VIDEO_PLAY',
			value: this.state.progress.playedSeconds
		});
		this.props.onPlay();
	}

	handlePause = () => {
		const { session } = this.context;
		session.log({
			id: this.props.id,
			type: 'VIDEO_PAUSE',
			value: this.state.progress.playedSeconds
		});
		this.props.onPause();
	}

	handleEnded = () => {
		const { session } = this.context;
		session.log({
			id: this.props.id,
			type: 'VIDEO_END',
			value: this.state.progress.playedSeconds
		});
		this.props.onEnded();
	}

	handleProgress = ( progress ) => {
		this.setState({
			progress: progress
		});
	}

	render() {
		const style = {
			width: this.props.width,
			height: this.props.height,
			marginTop: '30px',
			...this.props.style
		};
		if ( this.props.center ) {
			style.marginLeft = calculateMargin( this.props.containerWidth, this.props.width );
			style.marginRight = calculateMargin( this.props.containerWidth, this.props.width );
		}
		return (
			<div
				style={style}
				className="video"
			>
				<ReactPlayer {...this.props}
					onPlay={this.handlePlay}
					onPause={this.handlePause}
					onEnded={this.handleEnded}
					onProgress={this.handleProgress}
					progressFrequency={1000}
				/>
			</div>
		);
	}
}


// PROPERTY TYPES //

Video.propTypes = {
	url: PropTypes.string,
	center: PropTypes.bool,
	controls: PropTypes.bool,
	loop: PropTypes.bool,
	playing: PropTypes.bool,
	volume: PropTypes.number,
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	style: PropTypes.object,
	onPlay: PropTypes.func,
	onPause: PropTypes.func,
	onEnded: PropTypes.func
};


// DEFAULT PROPERTIES //

Video.defaultProps = {
	url: '',
	center: true,
	controls: false,
	loop: false,
	playing: false,
	volume: 0.8,
	height: 360,
	width: 640,
	style: {},
	onPlay() {},
	onPause() {},
	onEnded() {}
};


// CONTEXT TYPES //

Video.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Dimensions( Video );
