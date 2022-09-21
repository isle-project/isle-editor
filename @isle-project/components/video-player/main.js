// MODULES //

import React, { useEffect, useRef, useState, Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import contains from '@stdlib/assert/contains';
import Tooltip from '@isle-project/components/tooltip';
import isHidden from '@isle-project/utils/is-hidden';
import isElectron from '@isle-project/utils/is-electron';
import { END, PLAY, START, PAUSE, SEEK } from '@isle-project/constants/actions.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const debug = logger( 'isle:video-player' );


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

const ErrorDisplay = ({ error, t, onClick }) => {
	const button = <Tooltip tooltip={t('retry')}>
		<Button
			size="sm" variant="light-outline" onClick={onClick}
			style={{ position: 'absolute', top: 5, right: 5 }}
		>
			<i className="fas fa-redo"></i>
		</Button>
	</Tooltip>;
	return ( <div style={{ position: 'relative' }}>
		<pre>{error}</pre>
		{button}
	</div> );
};


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
const Video = ( props ) => {
	const { url, center, playing, startTime, width, height, style, onEnded, onStart, onPlay, onPause, onSeek, ...rest } = props;
	const [ encounteredError, setEncounteredError ] = useState( null );
	const [ inViewport, setInViewport ] = useState( false );
	const [ progress, setProgress ] = useState( {} );
	const { id, logAction } = useActionLogger( 'VIDEO', props );
	const { t } = useTranslation( 'video' );
	const videoPlayer = useRef( null );
	const internalPlayer = useRef( null );

	const isInViewport = useCallback( () => {
		debug( 'Check whether video player is in viewport...' );
		if ( !videoPlayer.current ) {
			return false;
		}
		const top = videoPlayer.current.getBoundingClientRect().top;
		setInViewport( top >= 0 && top <= window.innerHeight );
	}, [] );

	useEffect( () => {
		const node = isElectron ? document.getElementById( 'Lesson' ) : document;
		if ( playing ) {
			node.addEventListener( 'scroll', isInViewport );
		}
		return () => {
			node.removeEventListener( 'scroll', isInViewport );
		};
	}, [ playing, isInViewport ] );
	const handleStart = useCallback( () => {
		logAction( START, progress.playedSeconds );
		onStart();
	}, [ logAction, onStart, progress ] );
	const handlePlay = useCallback( () => {
		logAction( PLAY, progress.playedSeconds );
		onPlay();
	}, [ logAction, onPlay, progress ] );
	const handlePause = useCallback( () => {
		logAction( PAUSE, progress.playedSeconds );
		onPause();
	}, [ logAction, onPause, progress ] );
	const handleSeek = useCallback( ( seconds ) => {
		logAction( SEEK, seconds );
		onSeek( seconds );
	}, [ logAction, onSeek ] );
	const handleReady = useCallback( ( player ) => {
		internalPlayer.current = player;
		if ( startTime ) {
			const player = internalPlayer.current.getInternalPlayer();

			// Skip ahead to chosen start time:
			player.seekTo( startTime );
		}
	}, [ startTime ] );
	const handleEnded = useCallback( () => {
		logAction( END, progress.playedSeconds );
		onEnded();
	}, [ logAction, onEnded, progress ] );
	const handleError = useCallback( ( errorCode ) => {
		debug( 'Encountered an error: '+errorCode );
		let error;
		switch ( errorCode ) {
			case 150:
				error = t('playback-disabled');
				break;
			default:
				error = t('video-not-loaded');
				break;
		}
		setEncounteredError( error );
	}, [ t ] );
	if ( !url ) {
		return <Alert variant="danger" >{t('url-missing')}</Alert>;
	}
	const customStyle = {
		width: width,
		height: height,
		marginTop: '10px',
		marginBottom: '10px',
		...style
	};
	if ( center ) {
		customStyle.marginLeft = 'auto';
		customStyle.marginRight = 'auto';
	}
	const hidden = isHidden( videoPlayer.current );
	let player;
	if (
		!playing ||
		( inViewport && !hidden ) ||
		internalPlayer.current // Keep video player in case it was ready before...
	) {
		let config = {};
		if ( contains( url, 'yout' ) ) {
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
		player = <Fragment>
			{encounteredError && <ErrorDisplay error={encounteredError} t={t} onClick={() => {
				setEncounteredError( null );
			}} />}
			<ReactPlayer
				{...rest}
				url={url}
				playing={playing && !hidden}
				onStart={handleStart}
				onPlay={handlePlay}
				onPause={handlePause}
				onEnded={handleEnded}
				onProgress={setProgress}
				onReady={handleReady}
				onSeek={handleSeek}
				onError={handleError}
				progressInterval={1000}
				config={config}
				width={width}
				height={height}
			/>
		</Fragment>;
	} else {
		player = null;
	}
	const out = <div
		id={`${id}-outer`}
		style={customStyle}
		className="video"
		ref={( el ) => {
			if ( !videoPlayer.current ) {
				respondToVisibility( el, isInViewport );
				videoPlayer.current = el;
			}
		}}
	>
		{player}
	</div>;
	return out;
};


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


// EXPORTS //

export default withPropCheck( Video );
