// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Dimensions from 'components/dimensions';
import omit from '@stdlib/utils/omit';
import VoiceControl from 'components/voice-control';
import SessionContext from 'session/context.js';
import VOICE_COMMANDS from './voice_commands.json';


// VARIABLES //

const OMITTED_PROPS = [ 'center', 'containerWidth', 'containerHeight',
'updateDimensions', 'voiceID' ];


// FUNCTIONS //

function calculateMargin( containerWidth, targetWidth ) {
	const x = ( containerWidth - targetWidth ) / 2.0;
	return `${x | 0}px`;
}


// VIDEO //

/**
* A component for playing media files and content from YouTube, SoundCloud, and Vimeo.
*
* @property {string} url - URL of the video
* @property {boolean} controls - indicates whether to display control elements of the video player
* @property {boolean} playing - indicates whether to automatically start playing the video
* @property {number} volume - volume of the player
* @property {number} startTime - number of seconds at which to start the video, or fraction if value is between 0 and 1
* @property {boolean} center - controls whether to center the video player
* @property {(string|number)} height - height of the player
* @property {(string|number)} width - width of the player
* @property {boolean} loop - controls whether to start the video anew after it was played
* @property {string} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
* @property {Function} onEnded - callback invoked once the video ends
* @property {Function} onPause - callback invoked once the video pauses
* @property {Function} onPlay - callback invoked once the video starts or resumes playing after pausing
*/
class Video extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			progress: {}
		};
	}

	handlePlay = () => {
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'VIDEO_PLAY',
				value: this.state.progress.playedSeconds
			});
		}

		this.props.onPlay();
	}

	handlePause = () => {
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'VIDEO_PAUSE',
				value: this.state.progress.playedSeconds
			});
		}
		this.props.onPause();
	}

	handleStartTime = () => {
		if ( this.props.startTime ) {
			const player = this.player.getInternalPlayer();
			player.seekTo( this.props.startTime );
		}
	}

	handleEnded = () => {
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'VIDEO_END',
				value: this.state.progress.playedSeconds
			});
		}
		this.props.onEnded();
	}

	handleProgress = ( progress ) => {
		this.setState({
			progress: progress
		});
	}

	pausePlayer = () => {
		const player = this.player.getInternalPlayer();
		player.pauseVideo();
	}

	startPlayer = () => {
		const player = this.player.getInternalPlayer();
		player.playVideo();
	}

	stopPlayer = () => {
		const player = this.player.getInternalPlayer();
		player.stopVideo();
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
		props = omit( props, OMITTED_PROPS );
		return (
			<div
				id={this.props.id}
				style={style}
				className="video"
			>
				<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
				<ReactPlayer {...props}
					onPlay={this.handlePlay}
					onPause={this.handlePause}
					onEnded={this.handleEnded}
					onProgress={this.handleProgress}
					onReady={this.handleStartTime}
					progressInterval={1000}
					ref={( div ) => { this.player = div; }}
				/>
			</div>
		);
	}
}


// PROPERTIES //

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
	voiceID: PropTypes.string,
	startTime: PropTypes.number,
	style: PropTypes.object,
	onEnded: PropTypes.func,
	onPause: PropTypes.func,
	onPlay: PropTypes.func
};

Video.defaultProps = {
	url: '',
	controls: false,
	playing: false,
	volume: 0.8,
	center: true,
	height: 360,
	width: 640,
	loop: false,
	voiceID: null,
	startTime: null,
	style: {},
	onEnded() {},
	onPause() {},
	onPlay() {}
};

Video.contextType = SessionContext;


// EXPORTS //

export default Dimensions( Video );
