// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import beforeUnload from 'utils/before-unload';
import Signup from 'components/signup';
import Login from 'components/login';
import SessionContext from 'session/context.js';


// VARIABLES //

function createMessage( session, message ) {
	let msg = message || '';
	return {
		text: `Dear ${session.user.name}, this is an automatic confirmation email to inform you that you have successfully completed ${session.lessonName} of course ${session.namespaceName}. ${msg}`,
		subject: `${session.lessonName} successfully completed!`
	};
}


// MAIN //

/**
* A button to be displayed at the end of a lesson for students to click on. By default, a message confirming completion of the lesson is sent to their email address.
*
* @property {string} label - label of submit button
* @property {string} message - message for confirmation email
* @property {boolean} sendConfirmationEmail - controls whether to send confirmation email upon lesson submission
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback invoked when clicking on the submission button
*/
class LessonSubmit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showUserModal: false,
			visibleLogin: false,
			visibleSignup: false
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubsribe = session.subscribe( () => {
			this.forceUpdate();
		});
	}

	componentWillUnmount() {
		this.unsubsribe();
	}

	closeUserModal = () => {
		this.setState({
			showUserModal: false,
			visibleLogin: false,
			visibleSignup: false
		});
	}

	login = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogin: true,
			visibleSignup: false
		});
	}

	signup = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleSignup: true,
			visibleLogin: false
		});
	}

	closeSignup = () => {
		this.setState({
			visibleSignup: false,
			showUserModal: false
		});
	}

	closeLogin = () => {
		this.setState({
			visibleLogin: false,
			showUserModal: false
		});
	};

	finalizeSession = ( item ) => {
		const session = this.context;
		session.finalize();
		let notificationMesage = 'Lesson successfully completed.';
		if ( this.props.sendConfirmationEmail ) {
			notificationMesage += ' You will receive a confirmation email shortly';
			const msg = createMessage( session, this.props.message );
			session.sendMail( msg, session.user.email );
		}
		session.addNotification({
			title: 'Completed',
			message: notificationMesage,
			level: 'success',
			position: 'tr'
		});
		session.log({
			id: session.lessonName,
			type: 'LESSON_SUBMIT',
			value: 'Lesson submitted!'
		});
		this.setState({
			disabled: true
		});
		window.removeEventListener( 'beforeunload', beforeUnload );
	}

	handleClick = () => {
		this.props.onClick();
		const session = this.context;
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
	}

	render() {
		const session = this.context;
		const disabled = !session.live || this.state.disabled;
		return (
			<div className="bg-light" style={{
				maxWidth: 400,
				margin: '0 auto 0px',
				padding: '20px',
				fontFamily: 'Arial',
				...this.props.style
			}}>
				<Button disabled={disabled} variant="primary" size="large" onClick={this.handleClick} block>{this.props.label}</Button>
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
						<Button variant="primary" onClick={this.login.bind( this )} style={{ marginRight: '10px' }}>Login</Button>
						<Button onClick={this.signup.bind( this )}>Sign up</Button>
					</Modal.Footer>
				</Modal>
				<Login show={this.state.visibleLogin} onClose={this.closeLogin} />
				<Signup show={this.state.visibleSignup} onClose={this.closeSignup} />
			</div>
		);
	}
}


// PROPERTIES //

LessonSubmit.defaultProps = {
	label: 'Finish lesson',
	message: '',
	sendConfirmationEmail: true,
	style: {},
	onClick() {}
};

LessonSubmit.propTypes = {
	label: PropTypes.string,
	message: PropTypes.string,
	sendConfirmationEmail: PropTypes.bool,
	style: PropTypes.object,
	onClick: PropTypes.func
};

LessonSubmit.contextType = SessionContext;


// EXPORTS //

export default LessonSubmit;
