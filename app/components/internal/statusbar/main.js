// MODULES //

import React, { Component, Fragment, lazy, Suspense } from 'react';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import round from '@stdlib/math/base/special/round';
import isArray from '@stdlib/assert/is-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Signup from 'components/internal/signup';
import Login from 'components/internal/login';
import Gate from 'components/gate';
import Tooltip from 'components/tooltip';
import KeyControls from 'components/key-controls';
import Seal from 'components/seal';
import isElectron from 'utils/is-electron';
import VideoChatButton from 'components/video-chat-button';
import ChatButton from 'components/chat-button';
import animatePosition from 'utils/animate-position';
import SessionContext from 'session/context.js';
import VideoChats from './video-chats';
import Chats from './chats';
import ConfirmModal from './confirm_modal.js';
import isHidden from 'utils/is-hidden';
import { TOGGLE_BLACKSCREEN } from 'constants/actions.js';
import { CREATED_GROUPS, DISCONNECTED_FROM_SERVER, MEMBER_ACTION, SELF_INITIAL_PROGRESS, SELF_UPDATED_PROGRESS, SELF_UPDATED_SCORE,
	SERVER_IS_LIVE, LOGGED_OUT, LOGGED_IN, RECEIVED_USER_RIGHTS } from 'constants/events.js';
import VoiceControl from './voice-control';
import GroupManager from './group-manager';
import GroupClient from './group-client';
import Score from './score';
import './statusbar.css';
import './load_translations.js';
const InstructorView = lazy( () => import( 'components/internal/statusbar/instructor-view' ) );


// VARIABLES //

const debug = logger( 'isle:statusbar' );
const SERVER_ACTIVE_COLOR = 'rgb(130, 224, 160)';
const NO_RESPONSE_FROM_SERVER_COLOR = 'rgb(209, 107, 71)';


// FUNCTIONS //

function getDuration( session ) {
	let dur = new Date().getTime() - session.startTime;
	dur = round( dur / (1000 * 60) );
	return dur;
}

function preventPropagation( event ) {
	event.stopPropagation();
}


// MAIN //

class StatusBar extends Component {
	constructor( props, context ) {
		super( props );
		this.state = {
			visibleSignup: false,
			visibleLogin: false,
			visibleLogout: false,
			showGroupManager: false,
			showStatusBar: !context.config.hideStatusBar,
			showProgressBar: false,
			isProgressLeaving: false,
			progress: 0,
			duration: '0'
		};
		this.hidden = true;
	}

	componentDidMount() {
		let sentNotification = false;
		const promptLogin = () => {
			const session = this.context;
			if ( !isElectron && this.state.showStatusBar ) {
				session.addNotification({
					title: this.props.t( 'login' ),
					message: this.props.t( 'please-connect-message' ),
					level: 'success',
					autoDismiss: session.config.noLoginDismiss ? 0 : 15,
					position: 'tl',
					children: <div style={{ marginBottom: '30px' }}>
						<Button size="sm" style={{ float: 'right', marginRight: '10px' }} onClick={this.signup}>
							{this.props.t( 'signup' )}
						</Button>
						<Button size="sm" variant="primary" style={{ float: 'right', marginRight: '10px' }} onClick={this.login}>
							{this.props.t( 'login' )}
						</Button>
					</div>
				});
			}
		};

		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, data ) => {
			setTimeout( () => {
				if ( !sentNotification && session.anonymous && session.live ) {
					promptLogin();
					sentNotification = true;
				}
			}, 3000);

			if ( type === SELF_INITIAL_PROGRESS ) {
				this.setState({
					progress: round( Number( data ) * 100 )
				});
			}
			else if (
				type === SELF_UPDATED_PROGRESS ||
				type === SELF_UPDATED_SCORE
			) {
				const newState = {
					showProgressBar: true,
					isProgressLeaving: true
				};
				if ( type === SELF_UPDATED_PROGRESS ) {
					newState.progress = round( Number( data ) * 100 );
				}
				this.setState( newState );
				if ( this.progressTimeout ) {
					clearTimeout( this.progressTimeout );
					this.progressTimeout = null;
				}
				this.progressTimeout = setTimeout(() => {
					this.setState({
						showProgressBar: false,
						isProgressLeaving: false,
						duration: getDuration( session )
					});
					this.progressTimeout = null;
				}, 4000 );
			}
			else if (
				type === DISCONNECTED_FROM_SERVER ||
				type === LOGGED_IN || type === LOGGED_OUT ||
				type === SERVER_IS_LIVE || type === RECEIVED_USER_RIGHTS
			) {
				this.forceUpdate();
			}
			else if ( type === MEMBER_ACTION && data.type === TOGGLE_BLACKSCREEN ) {
				if ( data.value ) {
					const blackscreen = document.createElement( 'div' );
					blackscreen.setAttribute( 'id', 'blackscreen' );
					const lesson = document.getElementById( 'Lesson' );
					lesson.appendChild( blackscreen );
				} else {
					const blackscreen = document.getElementById( 'blackscreen' );
					if ( blackscreen ) {
						blackscreen.parentElement.removeChild( blackscreen );
					}
				}
			} else if ( type === CREATED_GROUPS && !this.state.showGroupManager ) {
				this.toggleGroupManager();
			}
		});
		this.renderTextInterval = setInterval( this.renderRecordedText, 1000 );
	}

	componentWillUnmount() {
		this.unsubscribe();
		if ( this.renderTextInterval ) {
			clearInterval( this.renderTextInterval );
		}
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

	toggleBarVisibility = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		const session = this.context;
		session.togglePresentationView();
		debug( 'Toggle visibility of statusbar...' );
		if ( !session.config.hideStatusBar ) {
			this.setState({
				showStatusBar: !this.state.showStatusBar
			});
		}
	}

	toggleGroupManager = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		this.setState({
			showGroupManager: !this.state.showGroupManager
		});
	}

	toggleBlackScreen = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		let blackscreen = document.getElementById( 'blackscreen' );
		const session = this.context;
		if ( !blackscreen ) {
			blackscreen = document.createElement( 'div' );
			blackscreen.setAttribute( 'id', 'blackscreen' );
			const lesson = document.getElementById( 'Lesson' );
			lesson.appendChild( blackscreen );
			session.log({
				id: 'statusbar',
				type: TOGGLE_BLACKSCREEN,
				value: true
			}, 'members' );
		} else {
			blackscreen.parentElement.removeChild( blackscreen );
			session.log({
				id: 'statusbar',
				type: TOGGLE_BLACKSCREEN,
				value: false
			}, 'members' );
		}
	}

	toggleBar = () => {
		if ( this.hidden ) {
			animatePosition( this.statusbar, 'top', 0, 300 );
			this.statusbar.style.opacity = 1.0;
			this.hidden = false;
		} else {
			animatePosition( this.statusbar, 'top', -32, 300 );
			this.statusbar.style.opacity = 0.95;
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
			this.statusbar.style.opacity = 0.95;
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

	handleBarClick = ( event ) => {
		this.toggleBar();
	}

	handleBarKeyPress = () => {
		this.toggleBar();
	}

	toggleProgress = () => {
		const session = this.context;

		// Initialize progress if not already set:
		session.setProgress();
		if ( this.state.isProgressLeaving || session.isOwner() ) {
			return;
		}
		if ( !this.state.showProgressBar ) {
			this.setState({
				showProgressBar: true,
				duration: getDuration( this.context )
			});
		} else {
			this.progressTimeout = setTimeout(() => {
				this.setState({
					showProgressBar: false,
					isProgressLeaving: false,
					duration: getDuration( this.context )
				});
				this.progressTimeout = null;
			}, 12000 );
		}
	}

	jumpToUnfinished = ( event ) => {
		debug( 'Jump to next unfinished question...' );
		event.stopPropagation();
		const session = this.context;
		const unfinished = session.unfinished;
		if ( isArray( unfinished ) ) {
			const first = unfinished[ 0 ];
			if ( first ) {
				const elem = document.getElementById( first );
				if ( !elem ) {
					return;
				}
				if ( isHidden( elem ) ) {
					const clone = elem.cloneNode( true );
					const newDiv = document.createElement( 'div' );
					newDiv.id = 'unfinished-container';
					clone.id = 'unfinished-elem';
					clone.classList.add( 'focus-glow' );
					newDiv.append( clone );
					document.body.appendChild( newDiv );
					setTimeout( () => {
						const element = document.getElementById( 'unfinished-container' );
						if ( element ) {
							element.parentNode.removeChild( element );
						}
					}, 4000 );
				} else {
					elem.classList.add( 'focus-glow' );
					elem.scrollIntoView();
					setTimeout( () => {
						elem.classList.remove( 'focus-glow' );
					}, 4000 );
				}
			}
		}
	}

	render() {
		const session = this.context;
		const finishedLesson = this.state.progress === 100;
		const preventPropForUsers = ( evt ) => {
			if ( !this.context.anonymous ) {
				evt.stopPropagation();
			}
		};
		const isOwner = session.isOwner() || isElectron;
		/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
		const picture = session.user.picture;
		const duration = <Fragment>
			{picture ? <img className="statusbar-profile" alt="User Profile Pic" src={picture} onClick={preventPropagation} /> : null}
			<Tooltip placement="bottom" tooltip={this.props.t( 'time-spent-tooltip' )}>
				<div className="progress-time" onClick={preventPropagation}>
					DUR: {this.state.duration} MIN
				</div>
			</Tooltip>
		</Fragment>;
		const roomName = session.namespaceName + '-' + session.lessonName;
		/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
		return (
			<Fragment>
				<Chats />
				<VideoChats />
				{isOwner ? <GroupManager active={this.state.showGroupManager} onHide={this.toggleGroupManager} /> : <GroupClient />}
				<div>
					<div
						className="statusbar unselectable"
						role="button" tabIndex={0}
						ref={( statusbar ) => { this.statusbar = statusbar; }}
						onClick={this.handleBarClick} onKeyPress={this.handleBarKeyPress}
						onMouseOver={this.onMouseOver} onFocus={this.onMouseOver}
						onMouseOut={this.onMouseOut} onBlur={this.onMouseOut}
						style={{
							top: '-32px',
							display: !this.state.showStatusBar ? 'none' : null
						}}
					>
						<div className="statusbar-left"></div>
						<div className="statusbar-middle">
							<VoiceControl session={this.context} t={this.props.t} />
							{isOwner ?
								<Tooltip placement="bottom" tooltip={`${this.props.t( 'presentation-mode-tooltip' )} (F7)`} >
									<span role="button" tabIndex={0}
										onClick={this.toggleBarVisibility} onKeyPress={this.toggleBarVisibility}
										className="statusbar-presentation-mode statusbar-icon"
										aria-label={this.props.t( 'presentation-mode-label' )}
									>
										<span className="fa fa-xs fa-eye-slash" />
									</span>
								</Tooltip> : null }
							{isOwner ?
								<Tooltip placement="bottom" tooltip={this.props.t( 'blackout-tooltip' )} >
									<span role="button" tabIndex={0} aria-label={this.props.t( 'blackout-label' )}
										onClick={this.toggleBlackScreen} onKeyPress={this.toggleBlackScreen}
										className="statusbar-blackscreen-mode statusbar-icon"
									>
										<span className="fa fa-xs fa-stop" />
									</span>
								</Tooltip> : null }
							{isOwner ?
								<Tooltip placement="bottom" tooltip={this.props.t( 'group-manager' )} >
									<span role="button" tabIndex={0} aria-label={this.props.t( 'group-manager' )}
										onClick={this.toggleGroupManager} onKeyPress={this.toggleGroupManager}
										className="statusbar-group-manager statusbar-icon"
									>
										<span className="fa fa-xs fa-user-friends" />
									</span>
								</Tooltip> : null }
							{ session.cohort ? <div className="statusbar-cohort" >{session.cohort}</div> : null }
							<Tooltip placement="bottom" tooltip={session.live ? this.props.t( 'connection-active' ) : this.props.t( 'connection-broken' )} >
								<div className="statusbar-presence" style={{
									backgroundColor: session.live ? SERVER_ACTIVE_COLOR : NO_RESPONSE_FROM_SERVER_COLOR
								}}>
									<div className="statusbar-inner-presence"></div>
								</div>
							</Tooltip>
							<div
								role="button" tabIndex={0}
								style={{ cursor: this.context.anonymous ? 'pointer' : 'help' }}
								className="statusbar-username"
								onClick={preventPropForUsers} onKeyPress={preventPropForUsers}
								onMouseEnter={this.toggleProgress} onFocus={this.toggleProgress}
								onMouseOut={this.toggleProgress} onBlur={this.toggleProgress}
								aria-label={this.props.t( 'user-progress' )}
							>
								{ session.anonymous ? `${this.props.t( 'anonymous' )} ${session.anonymousIdentifier}` : session.user.name }
							</div>
							{ !session.config.hideVideoChat ? <VideoChatButton
								for={roomName}
								buttonVariant="link"
								buttonLabel={<i className="fa fa-xs fa-video"></i>}
								tooltipPlacement="bottom"
								tooltip={this.props.t( 'video-chat' )}
								className="statusbar-icon statusbar-video-chat"
								onClick={preventPropagation}
							/> : null }
							{ !session.config.hideTextChat ? <ChatButton
								for={roomName}
								buttonVariant="link"
								anonymousSubmissions
								buttonLabel={<i className="fas fa-comments"></i>}
								tooltipPlacement="bottom"
								tooltip={this.props.t( 'text-chat' )}
								className="statusbar-icon statusbar-text-chat"
								onClick={preventPropagation}
							/> : null }
							{ session.anonymous ?
								<div>
									<Button
										size="sm"
										className="statusbar-button"
										variant="outline-secondary"
										style={{ float: 'right', marginRight: '-20px' }}
										onClick={this.signup}
										disabled={!session.live}
									>{this.props.t( 'signup' )}</Button>
									<Button
										size="sm"
										className="statusbar-button"
										variant="outline-secondary"
										style={{ float: 'right', marginRight: '10px' }}
										onClick={this.login}
										disabled={!session.live}
									>{this.props.t( 'login' )}</Button>
								</div> :
								<Fragment>
									<Button size="sm" className="statusbar-button" variant="outline-secondary" style={{ float: 'right', marginRight: '10px' }} onClick={this.logout}>
										{this.props.t( 'logout' )}
									</Button>
									<a href={session.server} target="_blank">
										<Button size="sm" className="statusbar-button" variant="outline-secondary" style={{ float: 'right', marginRight: '10px' }}>
											{this.props.t( 'goto-dashboard' )}
										</Button>
									</a>
								</Fragment> }
							<div className="statusbar-text">
								ISLE
							</div>
						</div>
						<div className="statusbar-right"></div>
						<div
							className={`statusbar-progress ${this.state.isProgressLeaving ? 'progress-fade-out' : ''} `}
							style={{
								display: !session.config.hideProgressBar && this.state.showProgressBar ? 'inherit' : 'none'
							}}
						>
							<Gate user>
								{duration}
								{ !isEmptyObject( session.responseVisualizers ) ?
									<Tooltip
										placement="bottom"
										tooltip={!finishedLesson ? this.props.t( 'preview-unfinished' ) : this.props.t( 'completed' )}
										show={isArray( session.unfinished )}
									>
										<div className="outer-statusbar-progress-bar">
											<ProgressBar
												label={`${this.props.t( 'completion-rate' )}: ${this.state.progress}%`}
												variant="success"
												now={this.state.progress} style={{
													animation: 'anim-fade-in 0.7s',
													border: 'solid 1px darkgrey'
												}}
												onClick={this.jumpToUnfinished}
											/>
										</div>
									</Tooltip> :
									<div className="outer-statusbar-progress-bar"></div>
								}
								<Score t={this.props.t} />
							</Gate>
						</div>
					</div>
					<Suspense fallback={null} >
						<Gate owner>
							<InstructorView />
						</Gate>
					</Suspense>
					{!this.state.showStatusBar && ( isOwner || isElectron ) ?
						<Tooltip placement="bottom" tooltip={`${this.props.t( 'presentation-mode-exit' )} (F7)`} >
							<span className="statusbar-presentation-mode-lone-icon" role="button" tabIndex={0}
								onClick={this.toggleBarVisibility} onKeyPress={this.toggleBarVisibility}
							>
								<span className="fa fa-xs fa-eye-slash" />
							</span>
						</Tooltip> :
						null
					}
				</div>
				<Login show={this.state.visibleLogin} onClose={this.closeLogin} />
				<Signup show={this.state.visibleSignup} onClose={this.closeSignup} />
				<ConfirmModal
					show={this.state.visibleLogout}
					close={this.closeLogout}
					title={this.props.t( 'logout')}
					message={this.props.t( 'confirm-logout' )}
					onConfirm={this.handleLogout}
					t={this.props.t}
				/>
				<KeyControls
					actions={{
						'F7': this.toggleBarVisibility
					}}
				/>
				{ finishedLesson && !session.config.hideProgressBar ?
					<Seal
						title="100%"
						upper={this.props.t( 'congratulations' )}
						lower={this.props.t( 'lesson-completed' )}
						upperArc={120}
						lowerArc={120}
						noOrnaments
						removable
						style={{
							position: 'fixed',
							right: '0px',
							bottom: '5%',
							transform: `rotate(-17deg) scale(${window.innerWidth / 1920})`,
							transformOrigin: '100% 100%',
							animation: 'anim-fade-in 1s forwards',
							background: 'linear-gradient(to right, white, silver, white)',
							fontFamily: 'Courier',
							zIndex: 1002
						}}
						innerStyle={{
							background: 'linear-gradient(to right, ghostwhite, #ffc107, ghostwhite, #ffc107, silver)'
						}}
					/> : null }
			</Fragment>
		);
	}
}


// TYPES //

StatusBar.contextType = SessionContext;


// EXPORTS //

export default withTranslation()( StatusBar );
