// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import omit from '@stdlib/utils/omit';
import generateUID from 'utils/uid';
import VoiceControl from 'components/voice-control';
import SessionContext from 'session/context.js';
import { VIDEO_END, VIDEO_PLAY, VIDEO_PAUSE } from 'constants/actions.js';
import VOICE_COMMANDS from './voice_commands.json';


// VARIABLES //

const uid = generateUID( 'video-player' );
const OMITTED_PROPS = [ 'center', 'voiceID' ];


// MAIN //

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
		this.id = props.id || uid( props );
		this.state = {
			progress: {}
		};
	}

	handlePlay = () => {
		const session = this.context;
		session.log({
			id: this.id,
			type: VIDEO_PLAY,
			value: this.state.progress.playedSeconds
		});
		this.props.onPlay();
	}

	handlePause = () => {
		const session = this.context;
		session.log({
			id: this.id,
			type: VIDEO_PAUSE,
			value: this.state.progress.playedSeconds
		});
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
		session.log({
			id: this.id,
			type: VIDEO_END,
			value: this.state.progress.playedSeconds
		});
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
			marginTop: '10px',
			marginBottom: '10px',
			...props.style
		};
		if ( props.center ) {
			style.marginLeft = 'auto';
			style.marginRight = 'auto';
		}
		props = omit( props, OMITTED_PROPS );
		const out = <div
			id={this.id}
			style={style}
			className="video"
		>
			<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
			<ReactPlayer
				onPlay={this.handlePlay}
				onPause={this.handlePause}
				onEnded={this.handleEnded}
				onProgress={this.handleProgress}
				onReady={this.handleStartTime}
				progressInterval={1000}
				ref={( div ) => { this.player = div; }}
				config={{
					youtube: {
						playerVars: {
							showinfo: 0,
							rel: 0,
							modestbranding: 1
						}
					}
				}}
				{...props}
			/>
		</div>;
		return out;
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

export default Video;
