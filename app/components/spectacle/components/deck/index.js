// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Deck from './main.js';
import endsWith from '@stdlib/string/ends-with';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';
import Timer from 'components/timer';
import Tooltip from 'components/tooltip';
import VoiceControl from 'components/internal/voice-control';
import Gate from 'components/gate';
import { TOGGLE_PRESENTATION_MODE } from 'constants/actions.js';
import isLineButtons from 'utils/is-line-buttons';
import isElectron from 'utils/is-electron';
import SessionContext from 'session/context.js';
import VOICE_COMMANDS from './voice_commands.json';
import './deck.css';


// VARIABLES //

function togglePresenterMode() {
	if ( contains( window.location.hash, 'presenter' ) ) {
		let hash = window.location.hash;
		hash = replace( hash, 'presenter', '' );
		window.location.hash = hash;
	} else {
		let hash = window.location.hash;
		hash = replace( hash, 'overview', '' );
		if ( contains( hash, '?' ) ) {
			hash += '&presenter';
		} else {
			hash = '?presenter';
		}
		window.location.hash = hash;
	}
}

function toggleOverviewMode() {
	if ( contains( window.location.hash, 'overview' ) ) {
		let hash = window.location.hash;
		hash = replace( hash, 'overview', '' );
		window.location.hash = hash;
	} else {
		let hash = window.location.hash;
		hash = replace( hash, 'presenter', '' );
		if ( contains( hash, '?' ) ) {
			hash += '&overview';
		} else {
			hash = '?overview';
		}
		window.location.hash = hash;
	}
}


// MAIN //

/**
* Spectacle slide deck. Wraps `<Slide>` tags.
*
* @property {boolean} autoplay - automatically advance slides
* @property {number} autoplayDuration - global autoplay duration (in milliseconds)
* @property {boolean} autoplayLoop - keep slides in loop
* @property {boolean} autoplayOnStart - start presentation with autoplay on/not paused
* @property {boolean} controls - show control arrows when not in fullscreen
* @property {number} contentHeight - baseline content area height
* @property {number} contentWidth - baseline content area width
* @property {boolean} disableKeyboardControls - toggle keyboard control
* @property {boolean} pageControls - controls whether page-up and page-down can be used to switch between slides
* @property {string} progress - progress indicator (accepts `pacman`, `bar`, `number` or `none`)
* @property {boolean} showFullscreenControl - show the fullscreen control button in bottom right of the screen
* @property {Array} transition - global slide transitions (accepts `slide`, `zoom`, `fade` or `spin`, which can be combined)
* @property {number} transitionDuration - global transition duration (in milliseconds)
*/
class CustomDeck extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			totalDuration: null,
			showFullscreenControl: props.showFullscreenControl,
			initialFullscreenControl: props.showFullscreenControl
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.showFullscreenControl !== prevState.initialFullscreenControl ) {
			const newState = {
				showFullscreenControl: nextProps.showFullscreenControl,
				initialFullscreenControl: nextProps.showFullscreenControl
			};
			return newState;
		}
		return null;
	}

	componentDidMount() {
		let totalDuration = 0;
		React.Children.forEach( this.props.children, ( child, i ) => {
			if ( !isLineButtons( child ) ) {
				totalDuration += ( child.props.duration ? child.props.duration : 0 );
			}
		});
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === TOGGLE_PRESENTATION_MODE ) {
				this.setState({
					showFullscreenControl: !value
				});
			}
		});
		session.addNotification({
			title: 'Slide Navigation',
			message: 'Use the left- and right arrow keys or the orange arrow buttons to navigate between slides',
			level: 'success',
			position: 'tl'
		});

		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({
			totalDuration
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	render() {
		let { children, ...rest } = this.props;
		const presenterMode = endsWith( window.location.hash, '?presenter' );
		if ( isElectron ) {
			children = [];
			React.Children.forEach( this.props.children, ( child ) => {
				if ( !isLineButtons( child ) ) {
					children.push( child );
				}
			});
		}
		return ( <Fragment>
			<VoiceControl commands={VOICE_COMMANDS} hide reference={this} id="slide" />
			{ presenterMode ? <Timer
				legend="Total: "
				duration={this.state.totalDuration}
				style={{
					top: '0px',
					right: '410px'
				}}
			/> : null}
			<Gate owner >
				<Tooltip tooltip="Toggle Slide Presenter Mode" placement="right" >
					<div
						tabIndex={0} role="button"
						className="presenter-mode-button"
						onClick={togglePresenterMode}
						onKeyPress={togglePresenterMode}
					>
						<i className="far fa-clipboard"></i>
					</div>
				</Tooltip>
			</Gate>
			<Tooltip tooltip="Toggle Overview Mode" placement="bottom" >
				<div
					tabIndex={0} role="button"
					className="overview-mode-button"
					onClick={toggleOverviewMode}
					onKeyPress={toggleOverviewMode}
				>
					<i className="fa fa-map"></i>
				</div>
			</Tooltip>
			<Deck
				{...rest}
				showFullscreenControl={this.state.showFullscreenControl}
			>{children}</Deck>
		</Fragment> );
	}
}


// PROPERTIES //

CustomDeck.defaultProps = {
	autoplay: false,
	autoplayDuration: 7000,
	autoplayLoop: true,
	autoplayOnStart: true,
	controls: true,
	contentHeight: 700,
	contentWidth: 1000,
	disableKeyboardControls: false,
	pageControls: true,
	progress: 'number',
	showFullscreenControl: true,
	transition: [],
	transitionDuration: 500
};

CustomDeck.propTypes = {
	autoplay: PropTypes.bool,
	autoplayDuration: PropTypes.number,
	autoplayLoop: PropTypes.bool,
	autoplayOnStart: PropTypes.bool,
	controls: PropTypes.bool,
	contentHeight: PropTypes.number,
	contentWidth: PropTypes.number,
	disableKeyboardControls: PropTypes.bool,
	pageControls: PropTypes.bool,
	progress: PropTypes.oneOf([ 'bar', 'number', 'none' ]),
	showFullscreenControl: PropTypes.bool,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number
};

CustomDeck.contextType = SessionContext;


// EXPORTS //

export default CustomDeck;
