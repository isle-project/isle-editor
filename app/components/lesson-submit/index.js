// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import beforeUnload from 'utils/before-unload';
import Signup from 'components/signup';
import Login from 'components/login';


// MAIN //

class LessonSubmit extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			showUserModal: false,
			user: '',
			email: '',
			visibleLogin: false,
			visibleSignup: false
		};

		this.closeUserModal = () => {
			this.setState({
				showUserModal: false,
				visibleLogin: false,
				visibleSignup: false
			});
		};

		this.login = ( e ) => {
			e.stopPropagation();
			this.setState({
				visibleLogin: true,
				visibleSignup: false
			});
		};

		this.signup = ( e ) => {
			e.stopPropagation();
			this.setState({
				visibleSignup: true,
				visibleLogin: false
			});
		};

		this.closeSignup = () => {
			this.setState({
				visibleSignup: false,
				showUserModal: false,
			});
		};

		this.closeLogin = () => {
			this.setState({
				visibleLogin: false,
				showUserModal: false,
			});
		};

		this.finalizeSession = ( item ) => {
			const { session } = this.context;
			session.finalize();
			session.addNotification({
				title: 'Completed',
				message: 'Lesson successfully completed. You will receive a confirmation email shortly.',
				level: 'success',
				position: 'tr'
			});
			if ( this.props.mail ) {
				session.sendMail( this.props.mail, session.user.email );
			}
			this.setState({
				disabled: true
			});
			window.removeEventListener( 'beforeunload', beforeUnload );
		};

		this.handleClick = () => {
			this.props.onClick();
			const { session } = this.context;
			const str = 'ISLE_USER_' + session.server;
			let item = localStorage.getItem( str );
			if ( !item ) {
				this.setState({
					showUserModal: true
				});
			}
			else {
				this.finalizeSession( item );
			}
		};

		this.handleEmailInput = ( e ) => {
			this.setState({ email: e.target.value });
		};

		this.handleUserInput = ( e ) => {
			this.setState({ user: e.target.value });
		};

	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubsribe = session.subscribe( () => {
			this.forceUpdate();
		});
	}

	componentWillUnmount() {
		this.unsubsribe();
	}

	render() {
		const { session } = this.context;
		return (
			<div className="well" style={{
				maxWidth: 400,
				margin: '0 auto 10px',
				marginTop: '30px',
				fontFamily: 'Arial',
				...this.props.style
			}}>
				<Button disabled={!session.live} bsStyle="primary" bsSize="large" onClick={this.handleClick} block>{this.props.label}</Button>
				<Modal show={this.state.showUserModal} onHide={this.closeUserModal}>
					<Modal.Header closeButton>
						<Modal.Title>Authentication</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							To finalize this lesson, please login in to your ISLE account. If you have not created one,
							please sign up and get access to the full functionality of ISLE.
						</p>
					</Modal.Body>
					<Modal.Footer style={{ textAlign: 'center' }}>
						<Button bsStyle="primary" onClick={this.login.bind( this )} style={{ marginRight: '10px' }}>Login</Button>
						<Button onClick={this.signup.bind( this )}>Sign up</Button>
					</Modal.Footer>
				</Modal>
				<Login show={this.state.visibleLogin} onClose={this.closeLogin} />
				<Signup show={this.state.visibleSignup} onClose={this.closeSignup} />
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

LessonSubmit.defaultProps = {
	label: 'Finish lesson',
	mail: null,
	onClick() {}
};


// PROPERTY TYPES //

LessonSubmit.propTypes = {
	label: PropTypes.string,
	mail: PropTypes.string,
	onClick: PropTypes.func
};

LessonSubmit.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default LessonSubmit;
