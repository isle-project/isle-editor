// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Dimensions from 'components/dimensions';
import omit from '@stdlib/utils/omit';


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
		let props = this.props;
		const style = {
			width: props.width,
			height: props.height,
			marginTop: '30px',
			...props.style
		};
		if ( props.center ) {
			style.marginLeft = calculateMargin( props.containerWidth, props.width );
			style.marginRight = calculateMargin( props.containerWidth, props.width );
		}
		props = omit( props, 'center' );
		return (
			<div
				style={style}
				className="video"
			>
				<ReactPlayer {...props}
					onPlay={this.handlePlay}
					onPause={this.handlePause}
					onEnded={this.handleEnded}
					onProgress={this.handleProgress}
					progressInterval={1000}
				/>
			</div>
		);
	}
}


// PROPERTY TYPES //

Video.propDescriptions = {
	url: 'URL of the video',
	controls: 'indicates whether to display control elements of the video player',
	playing: 'indictes whether to automatically start playing the video',
	volume: 'volume of the player',
	center: 'controls whether to center the video player',
	height: 'height of the player',
	width: 'width of the player',
	loop: 'controls whether to start the video anew after it was played',
	style: 'CSS inline styles',
	onEnded: 'callback invoked once the video ends',
	onPause: 'callback invoked once the video pauses',
	onPlay: 'callback invoked once the video starts or resumes playing after pausing'
};

Video.propTypes = {
	url: PropTypes.string,
	controls: PropTypes.bool,
	playing: PropTypes.bool,
	volume: PropTypes.number,
	center: PropTypes.bool,
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	loop: PropTypes.bool,
	style: PropTypes.object,
	onEnded: PropTypes.func,
	onPause: PropTypes.func,
	onPlay: PropTypes.func
};


// DEFAULT PROPERTIES //

Video.defaultProps = {
	url: '',
	controls: false,
	playing: false,
	volume: 0.8,
	center: true,
	height: 360,
	width: 640,
	loop: false,
	style: {},
	onEnded() {},
	onPause() {},
	onPlay() {}
};


// CONTEXT TYPES //

Video.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Dimensions( Video );
