// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import omit from '@stdlib/utils/omit';
import contains from '@stdlib/assert/contains';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';
import isHidden from '@isle-project/utils/is-hidden';
import isElectron from '@isle-project/utils/is-electron';
import { END, PLAY, START, PAUSE, SEEK } from '@isle-project/constants/actions.js';
import { withActionLogger } from '@isle-project/session/action_logger.js';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const debug = logger( 'isle:video-player' );
const OMITTED_PROPS = [ 'center', 'startTime', 't', 'tReady', 'retrieveLastAction', 'onAction' ];


// FUNCTIONS //

/**
 * Invokes a callback function when a change of the element with respect to the viewport occurs.
 *
 * @private
 * @param {HTMLElement} element - element to observe
 * @param {Function} callback - callback to invoke
 */
function respondToVisibility( element, callback ) {
	const options = {
		root: document.documentElement
	};
	const observer = new IntersectionObserver(( entries, observer ) => {
		entries.forEach( entry => {
			callback( entry.intersectionRatio > 0 );
		});
	}, options );
	observer.observe( element );
}


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
* @property {Object} style - CSS inline styles
* @property {Function} onEnded - callback invoked once the video ends
* @property {Function} onPause - callback invoked when the video pauses
* @property {Function} onPlay - callback invoked when the video starts or resumes playing after pausing
* @property {Function} onStart - callback invoked once the video pauses
* @property {Function} onSeek - callback when media seeks called with `seconds` parameter
*/
class Video extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			encounteredError: null,
			progress: {},
			inViewport: true
		};
	}

	componentDidMount() {
		if ( this.props.playing ) {
			const node = isElectron ? document.getElementById( 'Lesson' ) : document;
			node.addEventListener( 'scroll', this.isInViewport );
		}
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.playing && !prevProps.playing ) {
			const node = isElectron ? document.getElementById( 'Lesson' ) : document;
			node.addEventListener( 'scroll', this.isInViewport );
		}
	}

	componentWillUnmount() {
		const node = isElectron ? document.getElementById( 'Lesson' ) : document;
		node.removeEventListener( 'scroll', this.isInViewport );
	}

	isInViewport = () => {
		debug( 'Check whether video player is in viewport...' );
		if ( !this.videoPlayer ) {
			return false;
		}
		const top = this.videoPlayer.getBoundingClientRect().top;
		this.setState({
			inViewport: top >= 0 && top <= window.innerHeight
		});
	};

	handleStart = () => {
		this.props.logAction( START, this.state.progress.playedSeconds );
		this.props.onStart();
	};

	handlePlay = () => {
		this.props.logAction( PLAY, this.state.progress.playedSeconds );
		this.props.onPlay();
	};

	handlePause = () => {
		this.props.logAction( PAUSE, this.state.progress.playedSeconds );
		this.props.onPause();
	};

	handleSeek = ( seconds ) => {
		this.props.logAction( SEEK, seconds );
		this.props.onSeek( seconds );
	};

	handleReady = ( player ) => {
		this.player = player;
		if ( this.props.startTime ) {
			const internalPlayer = this.player.getInternalPlayer();

			// Skip ahead to chosen start time:
			internalPlayer.seekTo( this.props.startTime );
		}
	};

	handleEnded = () => {
		this.props.logAction( END, this.state.progress.playedSeconds );
		this.props.onEnded();
	};

	handleError = ( errorCode ) => {
		debug( 'Encountered an error: '+errorCode );
		let encounteredError;
		switch ( errorCode ) {
			case 150:
				encounteredError = this.props.t('playback-disabled');
				break;
			default:
				encounteredError = this.props.t('video-not-loaded');
				break;
		}
		this.setState({
			encounteredError
		});
	};

	handleProgress = ( progress ) => {
		this.setState({
			progress: progress
		});
	};

	pausePlayer = () => {
		const player = this.player.getInternalPlayer();
		player.pauseVideo();
	};

	startPlayer = () => {
		const player = this.player.getInternalPlayer();
		player.playVideo();
	};

	stopPlayer = () => {
		const player = this.player.getInternalPlayer();
		player.stopVideo();
	};

	renderError() {
		if ( !this.state.encounteredError ) {
			return null;
		}
		const button = <Tooltip tooltip={this.props.t('retry')}>
			<Button size="sm" variant="light-outline" onClick={() => {
				this.setState({ encounteredError: null });
			}} style={{ position: 'absolute', top: 5, right: 5 }}>
				<i className="fas fa-redo"></i>
			</Button>
		</Tooltip>;
		return ( <div style={{ position: 'relative' }}>
			<pre>{this.state.encounteredError}</pre>
			{button}
		</div> );
	}

	render() {
		if ( !this.props.url ) {
			return <Alert variant="danger" >{this.props.t('url-missing')}</Alert>;
		}
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
		const hidden = isHidden( this.videoPlayer );
		let player;
		if (
			!this.props.playing ||
			( this.state.inViewport && !hidden ) ||
			this.player // Keep video player in case it was ready before...
		) {
			let config = {};
			if ( contains( props.url, 'yout' ) ) {
				config = {
					youtube: {
						playerVars: {
							showinfo: 0,
							rel: 0,
							modestbranding: 1
						}
					}
				};
			}
			if ( hidden ) {
				props.playing = false;
			}
			player = <Fragment>
				{ this.state.encounteredError ?
					this.renderError() :
					<ReactPlayer
						{...props}
						onStart={this.handleStart}
						onPlay={this.handlePlay}
						onPause={this.handlePause}
						onEnded={this.handleEnded}
						onProgress={this.handleProgress}
						onReady={this.handleReady}
						onSeek={this.handleSeek}
						onError={this.handleError}
						progressInterval={1000}
						config={config}
					/>
				}
			</Fragment>;
		} else {
			player = null;
		}
		const out = <div
			id={this.id}
			style={style}
			className="video"
			ref={( el ) => {
				if ( !this.videoPlayer ) {
					this.videoPlayer = el;
					respondToVisibility( this.videoPlayer, this.isInViewport );
				}
			}}
		>
			{player}
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
	startTime: PropTypes.number,
	style: PropTypes.object,
	onEnded: PropTypes.func,
	onPause: PropTypes.func,
	onPlay: PropTypes.func,
	onStart: PropTypes.func,
	onSeek: PropTypes.func
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
	startTime: null,
	style: {},
	onEnded() {},
	onPause() {},
	onPlay() {},
	onStart() {},
	onSeek() {}
};

Video.contextType = SessionContext;


// EXPORTS //

export default withActionLogger( 'VIDEO' )( withTranslation( 'video' )( withPropCheck( Video ) ) );
