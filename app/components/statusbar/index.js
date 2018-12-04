// MODULES //

import React, { Component, Fragment, lazy, Suspense } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ceil from '@stdlib/math/base/special/ceil';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import sample from '@stdlib/random/sample';
import logger from 'debug';
import Signup from 'components/signup';
import Login from 'components/login';
import Gate from 'components/gate';
import VoiceInput from 'components/input/voice';
import Calculator from 'components/calculator';
import Chat from 'components/statusbar/chat';
import Tooltip from 'components/tooltip';
import KeyControls from 'components/key-controls';
import isElectron from 'utils/is-electron';
import animatePosition from 'utils/animate-position';
import SessionContext from 'session/context.js';
import ConfirmModal from './confirm_modal.js';
import './statusbar.css';
const InstructorView = lazy( () => import( 'components/statusbar/instructor-view' ) );


// VARIABLES //

const debug = logger( 'isle:statusbar' );
const LOGGED_IN_COLOR = 'rgb(130, 224, 160)';
const LOGGED_OUT_COLOR = 'rgb(209, 107, 71)';


// MAIN //

class StatusBar extends Component {
	constructor( props, context ) {
		super( props );
		const statusbarWidth = max( 0.34 * window.innerWidth, 300 );
		const side = ( window.innerWidth - statusbarWidth ) / 2.0;

		this.state = {
			visibleSignup: false,
			visibleLogin: false,
			visibleLogout: false,
			statusbarWidth,
			side,
			recordedText: null,
			showCalculator: false,
			showStatusBar: !context.config.hideStatusBar
		};
		this.hidden = true;
	}

	componentDidMount() {
		let sentNotification = false;
		const promptLogin = () => {
			const session = this.context;
			if ( !isElectron && this.state.showStatusBar ) {
				session.addNotification({
					title: 'Login',
					message: 'Please connect with your ISLE account or create a new one.',
					level: 'success',
					autoDismiss: 15,
					position: 'tl',
					children: <div style={{ marginBottom: '30px' }}>
						<Button size="sm" style={{ float: 'right', marginRight: '10px' }} onClick={this.signup}>Sign up</Button>
						<Button size="sm" variant="primary" style={{ float: 'right', marginRight: '10px' }} onClick={this.login}>Login</Button>
					</div>
				});
			}
		};

		const session = this.context;
		this.unsubscribe = session.subscribe( () => {
			if ( !sentNotification && session.anonymous && session.live ) {
				setTimeout( promptLogin, 2000 );
				sentNotification = true;
			}
			this.forceUpdate();
		});
		window.addEventListener( 'resize', this.getStatusbarInfo );

		this.renderTextInterval = setInterval( this.renderRecordedText, 1000 );
	}

	componentWillUnmount() {
		this.unsubscribe();
		if ( this.renderTextInterval ) {
			clearInterval( this.renderTextInterval );
		}
		window.removeEventListener( 'resize', this.getStatusbarInfo );
	}

	closeSignup = () => {
		this.setState({
			visibleSignup: false
		});
	}

	closeLogin = () => {
		this.setState({
			visibleLogin: false
		});
	}

	closeLogout = () => {
		this.setState({
			visibleLogout: false
		});
	}

	toggleBarVisibility = () => {
		console.log( 'Toggle visibility of statusbar...' );
		this.setState({
			showStatusBar: !this.state.showStatusBar
		});
	}

	toggleBar = () => {
		if ( this.hidden ) {
			animatePosition( this.statusbar, 'top', 0, 300 );
			this.statusbar.style.opacity = 1.0;
			this.hidden = false;
		} else {
			animatePosition( this.statusbar, 'top', -32, 300 );
			this.statusbar.style.opacity = 0.7;
			this.hidden = true;
		}
	}

	onMouseOver = () => {
		if ( this.hidden ) {
			this.statusbar.style.opacity = 1.0;
		}
	}

	onMouseOut = () => {
		if ( this.hidden ) {
			this.statusbar.style.opacity = 0.7;
		}
	}

	login = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogin: true
		});
	}

	signup = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleSignup: true
		});
	}

	logout = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogout: true
		});
	}

	handleLogout = () => {
		const session = this.context;
		session.logout();
		this.closeLogout();
	}

	getStatusbarInfo = () => {
		const statusbarWidth = max( 0.34 * window.innerWidth, 300 );
		const side = ( window.innerWidth - statusbarWidth ) / 2.0;
		this.setState({
			statusbarWidth,
			side
		});
	}

	handleVoiceInput = ( text ) => {
		debug( 'Received voice input: ' + text );
		this.setState({
			recordedText: text
		});
		setTimeout(() => {
			this.setState({ recordedText: null });
		}, 3000 );
		const session = this.context;
		session.speechInterface.check( text );
	}

	handleVoiceInputChange = ( event ) => {
		event.stopPropagation();
	}

	renderRecordedText = () => {
		if ( this.state.recordedText ) {
			this.displayedText.innerHTML = sample( this.state.recordedText, {
				'size': 1
			});
		}
	}

	toggleCalculator = ( event ) => {
		event.stopPropagation();
		this.setState({
			showCalculator: !this.state.showCalculator
		});
	}

	getChatPosition( idx ) {
		const session = this.context;
		const margin = 10;
		const nChatsPerSide = ceil( session.chats.length / 2 );
		const maxWidth = this.state.side * 0.6;
		const width = min( ( this.state.side - margin - margin*nChatsPerSide ) / nChatsPerSide, maxWidth );
		let left = margin + ( idx * ( width + margin ) );
		if ( idx > ( nChatsPerSide-1 ) ) {
			left += this.state.statusbarWidth;
			if ( nChatsPerSide === 1 && idx === 1 ) {
				left += width + margin;
			}
		}
		const pos = {
			left,
			width
		};
		debug( 'New chat position: ' + JSON.stringify( pos ) );
		return pos;
	}

	render() {
		const session = this.context;
		return (
			<Fragment>
				<div>
					{session.chats.map( ( chat, idx ) => {
						const pos = this.getChatPosition( idx );
						return <Chat chat={chat} idx={idx} key={idx} left={pos.left} width={pos.width} />;
					})}
					<div
						className="statusbar unselectable"
						ref={( statusbar ) => { this.statusbar = statusbar; }}
						onClick={this.toggleBar}
						onMouseOver={this.onMouseOver}
						onMouseOut={this.onMouseOut}
						style={{
							top: '-32px',
							display: !this.state.showStatusBar ? 'none' : null
						}}
					>
						<div className="statusbar-left"></div>
						<div className="statusbar-middle">
							<div className="statusbar-voice">
								<VoiceInput
									onClick={this.handleVoiceInputChange}
									mode="microphone" width={18} height={18}
									stopTooltip="Disable voice control (F9)"
									startTooltip="Enable voice control (F9)"
									onFinalText={this.handleVoiceInput}
									maxAlternatives={5}
									remote={{
										toggle: 120 // F9
									}}
								/>
								<span ref={( span ) => { this.displayedText = span; }} className="statusbar-voice-text" ></span>
							</div>
							<Tooltip tooltip={`${this.state.showCalculator ? 'Close' : 'Open'} calculator (F2)`} placement="bottom" >
								<div className="statusbar-calculator" onClick={this.toggleCalculator}>
										<span className="fa fa-xs fa-calculator statusbar-calc-icon" />
								</div>
							</Tooltip>
							<div className="statusbar-presence" style={{
								backgroundColor: session.anonymous ? LOGGED_OUT_COLOR : LOGGED_IN_COLOR
							}}>
								<div className="statusbar-inner-presence"></div>
							</div>
							<div className="statusbar-username">
								{ session.anonymous ? 'Anonymous' : session.user.name }
							</div>
							{ session.anonymous ?
								<div>
									<Button
										size="sm"
										className="statusbar-button"
										variant="outline-secondary"
										style={{ float: 'right', marginRight: '-20px' }}
										onClick={this.signup}
										disabled={!session.live}
									>Sign up</Button>
									<Button
										size="sm"
										className="statusbar-button"
										variant="outline-secondary"
										style={{ float: 'right', marginRight: '10px' }}
										onClick={this.login}
										disabled={!session.live}
									>Login</Button>
								</div> :
								<Button size="sm" className="statusbar-button" variant="outline-secondary" style={{ float: 'right', marginRight: '10px' }} onClick={this.logout}>Log Out</Button> }
							<div className="statusbar-text">
								ISLE
							</div>
						</div>
						<div className="statusbar-right"></div>
						<Login show={this.state.visibleLogin} onClose={this.closeLogin} />
						<Signup show={this.state.visibleSignup} onClose={this.closeSignup} />
						<ConfirmModal
							show={this.state.visibleLogout}
							close={this.closeLogout}
							title="Logout"
							message="Do you really want to log out? To log in again, you will need your password."
							onConfirm={this.handleLogout}
						/>
					</div>
					<Suspense fallback={null} >
						<Gate owner>
							<InstructorView />
						</Gate>
					</Suspense>
				</div>
				<Calculator show={this.state.showCalculator} onHide={this.toggleCalculator} />
				<KeyControls
					actions={{
						'F2': this.toggleCalculator,
						'F7': this.toggleBarVisibility
					}}
				/>
			</Fragment>
		);
	}
}


// TYPES //

StatusBar.contextType = SessionContext;


// EXPORTS //

export default StatusBar;
