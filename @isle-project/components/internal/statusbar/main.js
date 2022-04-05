// MODULES //

import React, { Component, Fragment, lazy, Suspense } from 'react';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import round from '@stdlib/math/base/special/round';
import isArray from '@stdlib/assert/is-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Signup from '@isle-project/components/internal/signup';
import Login from '@isle-project/components/internal/login';
import Gate from '@isle-project/components/gate';
import Tooltip from '@isle-project/components/tooltip';
import KeyControls from '@isle-project/components/key-controls';
import Seal from '@isle-project/components/seal';
import isElectron from '@isle-project/utils/is-electron';
import VideoChatButton from '@isle-project/components/internal/video-chat-button';
import ChatButton from '@isle-project/components/internal/chat-button';
import animatePosition from '@isle-project/utils/animate-position';
import SessionContext from '@isle-project/session/context.js';
import VideoChats from './video-chats';
import Chats from './chats';
import ConfirmModal from './confirm_modal.js';
import isHidden from '@isle-project/utils/is-hidden';
import { TOGGLE_BLACKSCREEN } from '@isle-project/constants/actions.js';
import { CREATED_GROUPS, DISCONNECTED_FROM_SERVER, MEMBER_ACTION, SELF_INITIAL_PROGRESS, SELF_UPDATED_PROGRESS, SELF_UPDATED_SCORE,
	SERVER_IS_LIVE, LOGGED_OUT, LOGGED_IN, RECEIVED_USER_RIGHTS } from '@isle-project/constants/events.js';
import VoiceControl from './voice-control';
import GroupManager from './group-manager';
import GroupClient from './group-client';
import Score from './score';
import './statusbar.css';
const InstructorView = lazy( () => import( /* webpackChunkName: "InstructorView" */ '@isle-project/components/internal/statusbar/instructor-view' ) );


// VARIABLES //

const debug = logger( 'isle:statusbar' );
const SERVER_ACTIVE_COLOR = 'rgb(130, 224, 160)';
const NO_RESPONSE_FROM_SERVER_COLOR = 'rgb(209, 107, 71)';
const F8 = '(F8)';
const F7 = '(F7)';
const G = '(G)';


// FUNCTIONS //

function getDuration( session ) {
	let dur = new Date().getTime() - session.startTime;
	dur = round( dur / (1000 * 60) );
	return dur;
}

function preventPropagation( event ) {
	event.stopPropagation();
}

function createBlackScreen( text ) {
	const blackscreen = document.createElement( 'div' );
	blackscreen.setAttribute( 'id', 'blackscreen' );
	const lesson = document.getElementById( 'Lesson' );
	lesson.appendChild( blackscreen );

	const notice = document.createElement( 'div' );
	notice.setAttribute( 'id', 'blackscreen-notice' );
	notice.innerText = text;
	blackscreen.append( notice );
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
			duration: '0',
			hidden: true
		};
	}

	componentDidMount() {
		let sentNotification = false;
		const { t } = this.props;
		const promptLogin = () => {
			const session = this.context;
			if ( !isElectron && this.state.showStatusBar ) {
				session.addNotification({
					title: t( 'login' ),
					message: t( 'please-connect-message' ),
					level: 'success',
					autoDismiss: session.config.noLoginDismiss ? 0 : 15,
					position: 'tl',
					children: <div style={{ marginBottom: '30px' }}>
						{session.settings.allowUserRegistrations !== false ? <Button id="statusbar-signup-button" size="sm" style={{ float: 'right', marginRight: '10px' }} onClick={this.signup}>
							{t( 'signup' )}
						</Button> : null}
						<Button id="statusbar-login-button" size="sm" variant="primary" style={{ float: 'right', marginRight: '10px' }} onClick={this.login}>
							{t( 'login' )}
						</Button>
					</div>,
					onAdd() {},
					onRemove() {}
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
			else if (
				type === MEMBER_ACTION &&
				data.type === TOGGLE_BLACKSCREEN &&
				data.email !== session.user.email
			) {
				if ( data.value ) {
					createBlackScreen(
						session.isOwner() ?
						this.props.t( 'blackout-intro-owner', { hotkey: 'F8' } ) :
						this.props.t( 'blackout-intro-user' )
					);
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
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		if ( this.renderTextInterval ) {
			clearInterval( this.renderTextInterval );
		}
		if ( this.progressTimeout ) {
			clearTimeout( this.progressTimeout );
		}
	}

	closeSignup = () => {
		this.setState({
			visibleSignup: false
		});
	};

	closeLogin = () => {
		this.setState({
			visibleLogin: false
		});
	};

	closeLogout = () => {
		this.setState({
			visibleLogout: false
		});
	};

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
	};

	toggleGroupManager = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		this.setState({
			showGroupManager: !this.state.showGroupManager
		});
	};

	toggleBlackScreen = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		debug( 'Toggling blackout mode...' );
		let blackscreen = document.getElementById( 'blackscreen' );
		const session = this.context;
		if ( !blackscreen ) {
			createBlackScreen(
				session.isOwner() ?
				this.props.t( 'blackout-intro-owner', { hotkey: 'F8' } ) :
				this.props.t( 'blackout-intro-user' )
			);
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
	};

	toggleBar = () => {
		if ( this.state.hidden ) {
			animatePosition( this.statusbar, 'top', 0, 300 );
			this.statusbar.style.opacity = 1.0;
			this.setState({ hidden: false });
		} else {
			animatePosition( this.statusbar, 'top', -32, 300 );
			this.statusbar.style.opacity = 0.95;
			this.setState({ hidden: true });
		}
	};

	onMouseOver = () => {
		if ( this.state.hidden ) {
			this.statusbar.style.opacity = 1.0;
		}
	};

	onMouseOut = () => {
		if ( this.state.hidden ) {
			this.statusbar.style.opacity = 0.95;
		}
	};

	login = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogin: true
		});
	};

	signup = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleSignup: true
		});
	};

	logout = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogout: true
		});
	};

	handleLogout = () => {
		const session = this.context;
		session.logout();
		this.closeLogout();
	};

	handleBarClick = ( event ) => {
		this.toggleBar();
	};

	handleBarKeyPress = () => {
		this.toggleBar();
	};

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
	};

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
	};

	preventPropagationForUsers = ( evt ) => {
		if ( !this.context.anonymous ) {
			evt.stopPropagation();
		}
	};

	renderUpperBar() {
		if ( this.state.hidden ) {
			return null;
		}
		const { t } = this.props;
		const session = this.context;
		if ( session.anonymous ) {
			return (
				<div>
					<Button
						size="sm"
						className="statusbar-button"
						variant="outline-secondary"
						style={{ position: 'absolute', right: '-20px' }}
						onClick={this.login}
						disabled={!session.live}
					>{t( 'login' )}</Button>
				</div>
			);
		}
		return (
			<Fragment>
				<a href={session.server} target="_blank" rel="noopener noreferrer" id="statusbar-dashboard-button" size="sm" className="statusbar-button" variant="outline-secondary" style={{ float: 'right', marginRight: '60px' }}>
					{t( 'goto-dashboard' )}
				</a>
				<Button size="sm" className="statusbar-button" variant="outline-secondary" style={{ position: 'absolute', right: '-20px' }} onClick={this.logout}>
					{t( 'logout' )}
				</Button>
			</Fragment>
		);
	}

	render() {
		const session = this.context;
		const { t } = this.props;
		const finishedLesson = this.state.progress === 100;
		const isOwner = session.isOwner() || isElectron;
		/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions, i18next/no-literal-string  */
		const picture = session.user.picture;
		const duration = <Fragment>
			{picture ? <img className="statusbar-profile" alt="User Profile Pic" src={picture} onClick={preventPropagation} /> : null}
			<Tooltip placement="bottom" tooltip={t( 'time-spent-tooltip' )}>
				<div className="progress-time" onClick={preventPropagation}>
					<i className="fas fa-clock"></i> {this.state.duration} MIN
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
						<Tooltip tooltip={this.state.hidden ? t( 'click-to-expand' ) : t( 'click-to-collapse' )} placement="left" >
							<div className="statusbar-left"></div>
						</Tooltip>
						<div className="statusbar-middle">
							<VoiceControl session={this.context} t={t} />
							{isOwner ?
								<Tooltip placement="bottom" tooltip={`${t( 'presentation-mode-tooltip' )} ${F7}`} >
									<span role="button" tabIndex={0}
										onClick={this.toggleBarVisibility} onKeyPress={this.toggleBarVisibility}
										className="statusbar-presentation-mode statusbar-icon"
										aria-label={t( 'presentation-mode-label' )}
									>
										<span className="fa fa-xs fa-eye-slash" />
									</span>
								</Tooltip> : null }
							{isOwner ?
								<Tooltip placement="bottom" tooltip={`${t( 'blackout-tooltip' )} ${F8}`} >
									<span role="button" tabIndex={0} aria-label={t( 'blackout-label' )}
										onClick={this.toggleBlackScreen} onKeyPress={this.toggleBlackScreen}
										className="statusbar-blackscreen-mode statusbar-icon"
									>
										<span className="fa fa-xs fa-stop" />
									</span>
								</Tooltip> : null }
							{isOwner ?
								<Tooltip placement="bottom" tooltip={`${t( 'group-manager' )} ${G}`} >
									<span role="button" tabIndex={0} aria-label={t( 'group-manager' )}
										onClick={this.toggleGroupManager} onKeyPress={this.toggleGroupManager}
										className="statusbar-group-manager statusbar-icon"
									>
										<span className="fa fa-xs fa-user-friends" />
									</span>
								</Tooltip> : null }
							{ session.cohort ? <div className="statusbar-cohort" >{session.cohort}</div> : null }
							<Tooltip placement="bottom" tooltip={session.live ? t( 'connection-active' ) : t( 'connection-broken' )} >
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
								onClick={this.preventPropagationForUsers}
								onKeyPress={this.preventPropagationForUsers}
								onMouseEnter={this.toggleProgress} onFocus={this.toggleProgress}
								onMouseOut={this.toggleProgress} onBlur={this.toggleProgress}
								aria-label={t( 'user-progress' )}
							>
								{ session.anonymous ? `${t( 'anonymous' )} ${session.anonymousIdentifier}` : session.user.name }
							</div>
							{ !session.config.hideVideoChat ? <VideoChatButton
								for={roomName}
								buttonVariant="link"
								buttonLabel={<i className="fa fa-xs fa-video"></i>}
								tooltipPlacement="bottom"
								tooltip={t( 'video-chat' )}
								className="statusbar-icon statusbar-video-chat"
								onClick={preventPropagation}
							/> : null }
							{ !session.config.hideTextChat ? <ChatButton
								for={roomName}
								buttonVariant="link"
								anonymousSubmissions
								buttonLabel={<i className="fas fa-comments"></i>}
								tooltipPlacement="bottom"
								tooltip={t( 'text-chat' )}
								className="statusbar-icon statusbar-text-chat"
								onClick={preventPropagation}
							/> : null }
							{this.renderUpperBar()}
							<div className="statusbar-text">
								ISLE
							</div>
						</div>
						<Tooltip tooltip={this.state.hidden ? t( 'click-to-expand' ) : t( 'click-to-collapse' )} placement="right" >
							<div className="statusbar-right"></div>
						</Tooltip>
						<div
							className={`statusbar-progress ${this.state.isProgressLeaving ? 'progress-fade-out' : ''} `}
							style={{
								display: !session.config.hideProgressBar && this.state.showProgressBar ? 'inherit' : 'none'
							}}
						>
							<Gate user banner={null} >
								{duration}
								{ !isEmptyObject( session.responseVisualizers ) ?
									<Tooltip
										placement="bottom"
										tooltip={!finishedLesson ? t( 'preview-unfinished' ) : t( 'completed' )}
										show={isArray( session.unfinished )}
									>
										<div className="outer-statusbar-progress-bar">
											<ProgressBar
												label={`${t( 'completion-rate' )}: ${this.state.progress}%`}
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
								<Score t={t} />
							</Gate>
						</div>
					</div>
					{!this.state.showStatusBar && ( isOwner || isElectron ) ?
						<Tooltip placement="bottom" tooltip={`${t( 'presentation-mode-exit' )} (F7)`} >
							<span className="statusbar-presentation-mode-lone-icon" role="button" tabIndex={0}
								onClick={this.toggleBarVisibility} onKeyPress={this.toggleBarVisibility}
							>
								<span className="fa fa-xs fa-eye-slash" />
							</span>
						</Tooltip> :
						null
					}
				</div>
				<Suspense fallback={null} >
					<Gate owner banner={null} showOwnerInPresentationMode={false} >
						<InstructorView />
					</Gate>
				</Suspense>
				{this.state.visibleLogin ? <Login show={this.state.visibleLogin} onClose={this.closeLogin} onShowSignup={this.signup} /> : null}
				{this.state.visibleSignup ? <Signup show={this.state.visibleSignup} onClose={this.closeSignup} /> : null}
				{this.state.visibleLogout ? <ConfirmModal
					show={this.state.visibleLogout}
					close={this.closeLogout}
					title={t( 'logout')}
					message={t( 'confirm-logout' )}
					onConfirm={this.handleLogout}
					t={t}
				/> : null}
				<KeyControls
					actions={{
						'F7': this.toggleBarVisibility,
						'F8': this.toggleBlackScreen,
						'g': this.toggleGroupManager
					}}
				/>
				{ finishedLesson && !session.config.hideProgressBar ?
					<Seal
						title="100%"
						upper={t( 'congratulations' )}
						lower={t( 'lesson-completed' )}
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

export default withTranslation( 'internal/statusbar' )( StatusBar );
