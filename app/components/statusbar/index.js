// MODULES //

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Signup from 'components/signup';
import Login from 'components/login';
import ConfirmModal from './confirm_modal.js';


// VARIABLES //

const LOGGED_IN_COLOR = 'rgb(130, 224, 160)';
const LOGGED_OUT_COLOR = 'rgb(209, 107, 71)';


// MAIN //

class StatusBar extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			visibleSignup: false,
			visibleLogin: false,
			visibleLogout: false
		};

		this.hidden = true;

	}

	componentDidMount() {
		this.closeLogin = this.closeLogin.bind( this );
		this.closeLogout = this.closeLogout.bind( this );
		this.closeSignup = this.closeSignup.bind( this );
		this.handleLogout = this.handleLogout.bind( this );

		let sentNotification = false;
		const promptLogin = () => {
			global.lesson.addNotification({
				title: 'Login',
				message: 'Please connect with your ISLE account or create a new one.',
				level: 'success',
				autoDismiss: 15,
				position: 'tl',
				children: <div style={{ marginBottom: '20px' }}>
					<Button bsSize="xsmall" style={{ float: 'right', marginRight: '10px' }} onClick={this.signup.bind( this )}>Sign up</Button>
					<Button bsSize="xsmall" bsStyle="primary" style={{ float: 'right', marginRight: '10px' }} onClick={this.login.bind( this )}>Login</Button>
				</div>
			});
		};

		const { session } = this.context;
		this.unsubscribe = session.subscribe( () => {
			if ( !sentNotification && session.anonymous && session.live ) {
				setTimeout( promptLogin, 2000 );
				sentNotification = true;
			}
			this.forceUpdate();
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	closeSignup() {
		this.setState({
			visibleSignup: false
		});
	};

	closeLogin() {
		this.setState({
			visibleLogin: false
		});
	}

	closeLogout() {
		this.setState({
			visibleLogout: false
		});
	}

	toggleBar() {
		if ( this.hidden ) {
			$( this.statusbar ).animate({ top: 0, opacity: 1.0 }, 300 );
			this.hidden = false;
		} else {
			$( this.statusbar ).animate({ top: -32, opacity: 0.7 }, 300 );
			this.hidden = true;
		}
	}

	onMouseOver() {
		if ( this.hidden ) {
			$( this.statusbar ).css( 'opacity', 1.0 );
		}
	}

	onMouseOut() {
		if ( this.hidden ) {
			$( this.statusbar ).css( 'opacity', 0.7 );
		}
	}

	login( e ) {
		e.stopPropagation();
		this.setState({
			visibleLogin: true
		});
	}

	signup( e ) {
		e.stopPropagation();
		this.setState({
			visibleSignup: true
		});
	}

	logout( e ) {
		e.stopPropagation();
		this.setState({
			visibleLogout: true
		});	
	}

	handleLogout() {
		const { session } = this.context;
		session.logout();
		this.closeLogout();
	}

	render() {
		const { session } = this.context;
		return (
			<div
				className="statusbar"
				ref={( statusbar ) => { this.statusbar = statusbar; }}
				onClick={this.toggleBar.bind( this )}
				onMouseOver={this.onMouseOver.bind( this )}
				onMouseOut={this.onMouseOut.bind( this )}
			>
				<div className="statusLeft" style={{
					position: 'absolute',
					left: 0,
					width: '20%',
					height: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					transform: 'skewX(45deg)',
					borderLeft: 'solid 1px darkgrey',
					borderBottom: 'solid 1px darkgrey'
				}}>
				</div>
				<div className="statusMiddle" style={{
					position: 'absolute',
					left: '10%',
					width: '80%',
					height: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					borderBottom: 'solid 1px darkgrey',
					zIndex: 5
				}}>
					<div className="presence" style={{
						width: '10px',
						left: '-10px',
						height: '10px',
						bottom: '4px',
						backgroundColor: session.anonymous ? LOGGED_OUT_COLOR : LOGGED_IN_COLOR,
						position: 'absolute',
						borderRadius: '50%',
						boxShadow: '1px 1px 2px grey'
					}}>
					</div>
					<div className="username" style={{
						bottom: '-1px',
						height: 'auto',
						marginLeft: '10px',
						position: 'absolute',
						fontSize: '12px',
						fontFamily: 'monospace'
					}}>
						{ session.anonymous ? 'Anonymous' : session.user.name }
					</div>
					{ session.anonymous ?
						<div>
							<Button 
								bsSize="xsmall" 
								style={{ float: 'right', marginRight: '-20px' }} 
								onClick={this.signup.bind( this )}
								disabled={!session.live}
							>Sign up</Button>
							<Button 
								bsSize="xsmall" 
								bsStyle="primary" 
								style={{ float: 'right', marginRight: '10px' }} 
								onClick={this.login.bind( this )}
								disabled={!session.live}
							>Login</Button>
						</div>
					: <Button bsSize="xsmall" style={{ float: 'right', marginRight: '10px' }} onClick={this.logout.bind( this )}>Log Out</Button> }
					<div style={{
						bottom: '-1px',
						height: 'auto',
						position: 'absolute',
						right: '20px',
						fontSize: '12px',
						fontFamily: 'monospace',
						zIndex: 2
					}}>
						ISLE
					</div>
				</div>
				<div className="statusRight" style={{
					position: 'absolute',
					left: '80%',
					width: '20%',
					height: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					transform: 'skewX(-45deg)',
					borderBottom: 'solid 1px darkgrey',
					borderRight: 'solid 1px darkgrey'
				 }}>
				</div>
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
		);
	}
}

// TYPES //

StatusBar.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default StatusBar;
